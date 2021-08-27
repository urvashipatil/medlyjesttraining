import React from "react";
import "./todo.css";

function TodoItem(props) {
  const { todo } = props;
  return (
    <div
      className={`todo-item ${todo.completed ? "completed" : ""}`}
      onDoubleClick={() => {
        alert("onTodoToggle");
      }}
    >
      {todo.title}{" "}
      <span
        className="fl-right"
        onClick={() => {
          alert(todo.id);
        }}
      >
        ☒
      </span>
    </div>
  );
}

export default TodoItem;
