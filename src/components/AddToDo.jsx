import React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import "./AddToDo.css";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { ADD_TODO } from "../redux/actionTypes";

const AddToDo = () => {
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(new Date());
  const [text, setText] = React.useState("");
  //   console.log(value, text);
  const hadelClick = () => {
    console.log(value, text);
    const newTodo = {
      id: nanoid(),
      text,
      date: value,
      completed: false,
    };
    dispatch({ type: ADD_TODO, payload: newTodo });
  };
  return (
    <div>
      <div className="input">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TextField
            id="outlined-basic"
            label="Input Text"
            variant="outlined"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <DateTimePicker
            renderInput={(params) => <TextField {...params} />}
            label="Give Compleation Date And Time"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            minDate={new Date()}
            minTime={new Date()}
            maxTime={new Date(0, 0, 0, 18, 45)}
          />
          <Button onClick={hadelClick} variant="contained" color="success">
            Success
          </Button>
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default AddToDo;
