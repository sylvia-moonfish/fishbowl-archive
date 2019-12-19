import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import React from "react";

import CenteredBlock from "./blocks/centered-block";
import ImageBlock from "./blocks/image-block";
import InlineChip from "./blocks/inline-chip";
import LoopingVideoBlock from "./blocks/looping-video-block";
import TimelineDialogBlock from "./blocks/timeline-dialog-block";
import YoutubeFrameBlock from "./blocks/youtube-frame-block";
import PageComponent from "./page-component";

class GuidePageComponent extends PageComponent {
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
      } else if (typeof content === "string") {
        return (
          <React.Fragment key={contentIndex}>{content + " "}</React.Fragment>
        );
      } else {
        return <React.Fragment key={contentIndex}>{content}</React.Fragment>;
      }
    });
  }

  generateBlocks(contents, mediaBaseUrl, id) {
    return contents.map((content, contentIndex) => {
      switch (content.type) {
        case "centered":
          return (
            <CenteredBlock key={contentIndex}>
              {this.generateBlocks(content.contents, mediaBaseUrl, id)}
            </CenteredBlock>
          );
        case "image":
          return (
            <ImageBlock
              key={contentIndex}
              src={mediaBaseUrl + content.src}
              width={content.width}
            />
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
                    {this.generateTypographyString(id, typography.contents)}
                  </Typography>
                );
              })}
            </Grid>
          );
        case "loopingVideo":
          return (
            <LoopingVideoBlock
              height={content.height}
              key={contentIndex}
              src={mediaBaseUrl + content.src}
            />
          );
        case "divider":
          return (
            <Grid item key={contentIndex}>
              <Divider />
            </Grid>
          );
        case "youtubeFrame":
          return (
            <YoutubeFrameBlock
              height={content.height}
              key={contentIndex}
              src={content.src}
              width={content.width}
            />
          );
      }
    });
  }

  generateDialog(id, mediaBaseUrl, contents) {
    return {
      id: id,
      children: (
        <React.Fragment>
          {this.generateBlocks(contents, mediaBaseUrl, id)}
        </React.Fragment>
      )
    };
  }

  generateDialogs(dialogs) {
    return (
      <React.Fragment>
        {dialogs.map((dialog, dialogIndex) => {
          return (
            <TimelineDialogBlock
              children={dialog.children}
              closeDialog={this.closeDialog}
              dialogHistory={this.state.dialogHistory}
              gimmickData={this.gimmickData}
              id={dialog.id}
              key={dialogIndex}
              openedDialog={this.state.openedDialog}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default GuidePageComponent;
