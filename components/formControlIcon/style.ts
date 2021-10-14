import { makeStyles, createStyles } from "@mui/styles";
export default makeStyles(() =>
  createStyles({
    root: {},
    formControlIco: {
      position: "relative",
      "& > img": {
        position: "absolute",
        left: 16,
        top: 41,
      },
      "& label": {
        transform: "translate(46px, 18px) scale(1)",
      },
      "& label.MuiInputLabel-shrink": {
        transform: "translate(46px, -6px) scale(0.75)",
      },
      "& input": {
        paddingLeft: "46px",
      },
      "& fieldset": {
        paddingLeft: 40,
      },
    },
  })
);
