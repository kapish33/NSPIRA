import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_TODO, TOGGLE_TODO } from "../redux/actionTypes";

const ShowToDo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return (
    <div>
      {/* show data in tabular form */}
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
            <th>Date Of Completion</th>
            <th>Completed</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.id}>
                <td>{todo.id.slice(0, 4) + "..."}</td>
                <td>{todo.text}</td>
                <td>
                  {new Date(todo.date).toLocaleDateString("hi-IN", options)}
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch({ type: TOGGLE_TODO, payload: todo.id });
                    }}
                  >
                    {todo.completed ? "Done" : "Not Done"}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch({ type: DELETE_TODO, payload: todo.id });
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowToDo;
/*
completed: false
date: Tue Mar 15 2022 13:16:50 GMT+0530 (India Standard Time) {}
id: "QcOkrTKg9pz_1kJzogHft"
text: ""
*/
