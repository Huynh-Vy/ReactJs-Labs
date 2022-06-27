import React, { useState } from "react";

function ToDoItem(props) {
  return (
    <li
      onClick={() => {
        props.delete(props.id);
      }}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
