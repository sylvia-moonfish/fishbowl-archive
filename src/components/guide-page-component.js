import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import React from "react";

import CenteredBlock from "./blocks/centered-block";
import ImageBlock from "./blocks/image-block";
import InlineChip from "./blocks/inline-chip";
import LoopingVideoBlock from "./blocks/looping-video-block";
import PageComponent from "./page-component";

class GuidePageComponent extends PageComponent {
  colorTypes = {};
  gimmickData = {};

  openDialog = (newDialogId, currentDialogId) => {
    if (currentDialogId) {
      this.state.dialogHistory.push(currentDialogId);
    }

    this.state.openedDialog = newDialogId;
    this.setState(this.state);
  };

  closeDialog = () => {
    if (this.state.dialogHistory.length > 0) {
      this.state.openedDialog = this.state.dialogHistory.pop();
    } else {
      this.state.openedDialog = false;
    }

    this.setState(this.state);
  };

  constructor(props) {
    super(props);

    this.state = {
      openedDialog: false,
      dialogHistory: []
    };
  }

  generatePostposition(word, postPosition) {
    const lastChar = word.charCodeAt(word.length - 1);

    if (lastChar < 0xac00 || lastChar > 0xd7a3) return postPosition;

    switch (postPosition) {
      case "을":
      case "를":
        return (lastChar - 0xac00) % 28 > 0 ? "을" : "를";
      case "이":
      case "가":
        return (lastChar - 0xac00) % 28 > 0 ? "이" : "가";
      case "은":
      case "는":
        return (lastChar - 0xac00) % 28 > 0 ? "은" : "는";
      case "과":
      case "와":
        return (lastChar - 0xac00) % 28 > 0 ? "과" : "와";
    }
  }

  generateString(words) {
    let str = "";

    words.forEach((word, wordIndex) => {
      if (
        wordIndex !== 0 &&
        word.length > 1 &&
        ["을", "를", "이", "가", "은", "는", "과", "와"].indexOf(word[0]) !==
          -1 &&
        word[1] === " "
      ) {
        word =
          this.generatePostposition(words[wordIndex - 1], word[0]) +
          word.substring(1);
      }

      str += word + " ";
    });

    return str;
  }

  generateTypographyString(currentId, contents) {
    contents.forEach((content, contentIndex) => {
      if (
        content.type &&
        content.type === "chip" &&
        contentIndex + 1 < contents.length &&
        !contents[contentIndex + 1].type
      ) {
        let line = contents[contentIndex + 1];

        if (
          line.length > 1 &&
          ["을", "를", "이", "가", "은", "는", "과", "와"].indexOf(line[0]) !==
            -1 &&
          line[1] === " "
        ) {
          line =
            this.generatePostposition(
              this.gimmickData[content.id].name,
              line[0]
            ) + line.substring(1);
          contents[contentIndex + 1] = line;
        }
      }
    });

    return contents.map((content, contentIndex) => {
      if (content.type && content.type === "chip") {
        return (
          <React.Fragment key={contentIndex}>
            <InlineChip
              currentId={content.showNoLink ? content.id : currentId}
              gimmickData={this.gimmickData}
              id={content.id}
              openDialog={this.openDialog}
            />{" "}
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment key={contentIndex}>{content + " "}</React.Fragment>
        );
      }
    });
  }

  generateDialog(id, mediaBaseUrl, contents) {
    return {
      id: id,
      children: (
        <React.Fragment>
          {contents.map((content, contentIndex) => {
            switch (content.type) {
              case "images":
                return (
                  <CenteredBlock key={contentIndex}>
                    {content.images.map((image, imageIndex) => {
                      return (
                        <ImageBlock
                          key={imageIndex}
                          src={mediaBaseUrl + image.src}
                          width={image.width}
                        />
                      );
                    })}
                  </CenteredBlock>
                );
              case "typographies":
                return (
                  <Grid item key={contentIndex}>
                    {content.typographies.map((typography, typographyIndex) => {
                      return (
                        <Typography
                          key={typographyIndex}
                          style={typography.style}
                          variant={typography.variant}
                        >
                          {this.generateTypographyString(
                            id,
                            typography.contents
                          )}
                        </Typography>
                      );
                    })}
                  </Grid>
                );
              case "loopingVideos":
                return (
                  <CenteredBlock key={contentIndex}>
                    {content.loopingVideos.map(
                      (loopingVideo, loopingVideoIndex) => {
                        return (
                          <LoopingVideoBlock
                            height={loopingVideo.height}
                            key={loopingVideoIndex}
                            src={mediaBaseUrl + loopingVideo.src}
                          />
                        );
                      }
                    )}
                  </CenteredBlock>
                );
              case "divider":
                return (
                  <Grid item>
                    <Divider />
                  </Grid>
                );
            }
          })}
        </React.Fragment>
      )
    };
  }
}

export default GuidePageComponent;
