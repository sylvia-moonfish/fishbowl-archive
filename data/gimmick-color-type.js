import {
  blue,
  blueGrey,
  brown,
  green,
  purple,
  red,
  teal,
  yellow
} from "@material-ui/core/colors";

const gimmickColorType = {
  light: {
    tank: blue[800],
    heal: green[800],
    dps: red[800],
    anyone: purple[800],
    everyone: yellow[800],
    everyoneSpecial: teal[800],
    noOne: brown[800],
    instruction: blueGrey[800],
    warning: red[800]
  },
  dark: {
    tank: blue[200],
    heal: green[200],
    dps: red[200],
    anyone: purple[200],
    everyone: yellow[200],
    everyoneSpecial: teal[200],
    noOne: brown[200],
    instruction: blueGrey[200],
    warning: red[200]
  }
};

export default gimmickColorType;
