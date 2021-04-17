import { makeStyles, TextField, withStyles } from "@material-ui/core";

// Clases aprovechando el hook makeStyles de Material-UI
export const useStyles = makeStyles((theme) => ({
  searchButton: {
    display: "block",
    marginTop: theme.spacing(2),
    padding: "1rem",
    borderRadius: "3rem",
    backgroundColor: "#108cff",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#5da8ff",
    },
  },
  title: {
    margin: "1rem",
    textDecoration: "underline",
    textDecorationColor: "#108cff",
  },
  formControl: {
    minWidth: 120,
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(3),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },

  gridList: {
    width: 1000,
    height: 750,
  },
  listImg: {
    width: 1000,
  },
  listSubheader: {
    fontWeight: "bold",
    color: "#000000",
  },
  gridListTile: {
    height: 120,
    backgroundColor: "#161616bd",
    marginBottom: "5px",
  },
  img: {
    maxWidth: 1000,
    maxHeight: 400,
  },
  flightIcon: {
    width: 35,
    height: 35,
  },
  iconBtn: {
    color: "#108cff",
    width: "10px",
  },
  inputIcon: {
    color: "#108cff",
  },
  listIcon: {
    color: "#108cff",
    marginRight: "5px",
  },
  listIconSm: {
    color: "#108cff",
    width: "20px",
  },
  listTitleIcon: {
    color: "#108cff",
    width: "30px",
    height: "30px",
  },
  listTitleIconSm: {
    color: "#108cff",
    width: "20px",
    height: "20px",
  },
  originTitleSm: {
    fontSize: "12px",
  },
  listIconSuccess: {
    color: "#20a020",
  },
  listIconError: {
    color: "#a02020",
  },
  listTitle: {
    fontSize: "1.5rem",
  },
  listError: {
    color: "#ff9090",
    fontSize: "15px",
  },
  listErrorLg: {
    color: "#ff9090",
  },
  listSuccess: {
    color: "#abff66",
    fontSize: "15px",
  },
  listSuccessLg: {
    color: "#abff66",
  },
  titleIcon: {
    width: 60,
    height: 60,
    color: "#108cff",
  },
  logo: {
    boxShadow: "0 0 5px #2b2b2b94",
    borderRadius: "0.3rem",
    margin: "1rem",
  },
  footer: {
    marginTop: "40px",
  },
  boxList: {
    padding: "1rem",
  },
  label: {
    marginRight: "10px",
  },
  dbFillBox: {
    padding: "3rem",
    justifyContent: "center",
    alignItems: "center",
  },
  dbFillButton: {
    display: "block",
    marginTop: theme.spacing(2),
    padding: "1rem",
    borderRadius: "3rem",
    backgroundColor: "#13924f",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#13a952",
    },
  },
  dbArrow: {
    color: "#13a952",
    width: 40,
    height: 40,
    margin: "10px",
  },
}));

// Custom input con colores personalizados
// Hecho con el hook withStyles (MATERIAL-UI)

export const MyTextField = withStyles({
  root: {
    "& .MuiInput-underline:after": {
      borderBottomColor: "#108cff",
    },
    "& label.Mui-focused": {
      color: "#108cff",
    },
    "& .MuiOutlinedInput-root": {
      "& label": {
        fontSize: "1.05rem",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#108cff",
      },
    },
  },
})(TextField);
