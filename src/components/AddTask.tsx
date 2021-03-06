import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import { useStyles } from "./AddTaskStyles";
interface AddTaskProp {
  onAdd: any;
}

const AddTask = ({ onAdd }: AddTaskProp) => {
  const classes = useStyles();
  const [task, setTask] = React.useState("");
  const [reminder, setReminder] = React.useState(false);
  const [ti, setTime] = React.useState(new Date());
  const [date, setDate] = React.useState(
    new Date().toISOString().substr(0, 10)
  );

  const handleChange = (time: any) => {
    setTime(time);
  };

  const onSubmit = (e: { preventDefault: any }) => {
    e.preventDefault();
    if (!task) {
      alert("Please add a task");
      return;
    }
    const time = ti.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    onAdd({ task, date, time, reminder });
    setTask("");
    setTime(new Date());
    setDate(new Date().toISOString().substr(0, 10));
    setReminder(false);
  };
  return (
    <form className={classes.container} onSubmit={onSubmit}>
      <div>
        <TextField
          label="Task"
          value={task}
          placeholder="Take the dog for a walk"
          className={classes.textField}
          onChange={(e) => setTask(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div style={{ marginTop: "5px" }}>
        <TextField
          label="Day"
          id="date"
          type="date"
          value={date}
          className={classes.textField}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

      <div style={{ marginTop: "5px", marginLeft: "10px" }}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardTimePicker
            style={{ width: "102%" }}
            id="time-picker"
            label="Time"
            value={ti}
            onChange={handleChange}
            KeyboardButtonProps={{
              "aria-label": "change time",
              style: { padding: "0" },
            }}
          />
        </MuiPickersUtilsProvider>
      </div>

      <div className={classes.form_footer}>
        <FormControlLabel
          style={{ marginLeft: "10px" }}
          control={
            <Checkbox
              checked={reminder}
              onChange={(e) => setReminder(e.currentTarget.checked)}
              name="checkedB"
              color="primary"
            />
          }
          labelPlacement="start"
          label="Reminder"
        />
        <input
          style={{ marginRight: "-8px" }}
          className="submit-btn"
          type="submit"
          value="save Task"
        ></input>
      </div>
    </form>
  );
};

export default AddTask;
