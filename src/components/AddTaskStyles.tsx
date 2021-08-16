import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px",
    marginRight: "14px",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
  },
  form_footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "15px",
  },
}));
