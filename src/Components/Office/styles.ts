import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    outlinedInputBorderLight: {
      borderColor: "#E8F3FC !important",
      borderRadius: "8px",
    },
    staffMembersHeading: {
      fontWeight: 600,
      color: "#000000",
      fontStyle: "#normal",
      marginBottom: "25px",
    },
    root: {
      width: "100%",
      maxWidth: 560,
      [theme.breakpoints.up("xs")]: {
        maxWidth: "100%",
      },
      [theme.breakpoints.up("lg")]: {
        maxWidth: "1200px",
      },
    },
    staffNumberText: {
      color: "#000000",
      fontSize: "18px",
      fontWeight: 400,
    },
    gridSpacingTop: {
      marginTop: "1px",
    },
    searchGridSection: {
      [theme.breakpoints.up("lg")]: {
        maxWidth: "1200px",
        paddingLeft: "0",
      },
    },
    gridStaffStyles: {
      [theme.breakpoints.up("md")]: {
        maxWidth: "1200px",
      },
    },
    officeBorderedGrid: {
      borderRadius: "10px",
      border: "1px solid #E8F3FC",
      padding: "10px",
      marginBottom: "26px",
      background: "#fff",
      "&:hover": {
        cursor: "pointer",
      },
      [theme.breakpoints.up("lg")]: {
        maxWidth: "1200px",
      },
    },
    textLabelGrey: {
      "& .MuiFormLabel-root": {
        color: "#787F89",
        fontWeight: 420,
      },
    },
    gridLineThrough: {
      borderBottom: "0.4px solid #0D4477",
      width: "90%",
      margin: "0 auto",
    },
    staffText: {
      fontStyle: "normal",
      lineHeight: "22px",
      fontWeight: 400,
    },
    officeTextLeft: {
      paddingLeft: "10px",
    },
    gridItemIconWidth: {
      margin: "0 auto",
      textAlign: "center",
    },
    buttonRemoveTextTransform: {
      textTransform: "none",
    },
    itemIconSpace: {
      marginRight: "10px",
      color: "#0D4477",
    },
    gridMoreInfoLeft: {
      marginLeft: "15px",
    },
    gridItemCenter: {
      margin: "0 auto",
      textAlign: "center",
    },
    centerText: {
      textAlign: "center",
    },
    iconColor: {
      color: "#0D4477",
    },
  })
);
