import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import TextField from "@material-ui/core/TextField";

import CloseIcon from "@material-ui/icons/Close";

import React from "react";

class CraftActionMacroTexts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      snackbar: false,
    };
  }

  render() {
    const dictionary = {
      checkCondition: {
        ko: "품질 확인",
        en: "Check condition",
        ja: "状態確認",
      },
      conditionExcellentLabel: {
        ko: "품질이 최고품질일 경우",
        en: "If condition is 'Excellent'",
        ja: "状態が「最高品質」",
      },
      conditionNotExcellentLabel: {
        ko: "품질이 최고품질이 아닐 경우",
        en: "If condition is not 'Excellent'",
        ja: "状態が「最高品質」以外",
      },
      endOfCrafting: {
        ko: "제작 완료",
        en: "Craft finished.",
        ja: "完了",
      },
      macroLabel: {
        ko: "매크로 #",
        en: "Macro #",
        ja: "マクロ#",
      },
    };

    const macroFields = [];

    this.props.actionMacro.forEach((action) => {
      switch (action.type) {
        case "action":
          const actionData = this.props.Actions[action.value];
          macroFields[macroFields.length - 1].lines.push(
            "/ac " +
              actionData.macroName[this.props.language] +
              " <wait." +
              (actionData.waitTime + this.props.waitTime).toString() +
              ">"
          );
          break;

        case "label":
          switch (action.value) {
            case "macroLabel":
              macroFields.push({
                label:
                  dictionary[action.value][this.props.language] + action.index,
                lines: [],
              });
              break;
            case "conditionExcellentLabel":
            case "conditionNotExcellentLabel":
              macroFields.push({
                label: dictionary[action.value][this.props.language],
                lines: [],
              });
              break;
          }
          break;
        case "prompt":
          switch (action.value) {
            case "checkCondition":
            case "endOfCrafting":
              macroFields[macroFields.length - 1].lines.push(
                "/echo " +
                  dictionary[action.value][this.props.language] +
                  " <se." +
                  action.soundEffect +
                  ">"
              );
              break;
          }
          break;
      }
    });

    return (
      <React.Fragment>
        <Snackbar
          action={[
            <IconButton
              color="primary"
              key="close"
              onClick={() => {
                this.state.snackbar = false;
                this.setState(this.state);
              }}
            >
              <CloseIcon />
            </IconButton>,
          ]}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          autoHideDuration={2000}
          message={<span>복사되었습니다.</span>}
          onClose={(e, r) => {
            if (r === "timeout") {
              this.state.snackbar = false;
              this.setState(this.state);
            }
          }}
          open={this.state.snackbar}
        />
        {macroFields.map((macroField, macroFieldIndex) => {
          return (
            <TextField
              fullWidth={true}
              InputProps={{
                readOnly: true,
                onClick: (e) => {
                  if (!document) return;
                  if (!e) return;
                  if (!e.target) return;

                  e.target.select(e.target);
                  document.execCommand("copy");

                  this.state.snackbar = true;
                  this.setState(this.state);
                },
              }}
              key={macroFieldIndex}
              label={macroField.label}
              margin="normal"
              multiline
              value={macroField.lines.join("\n")}
              variant="outlined"
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default CraftActionMacroTexts;
