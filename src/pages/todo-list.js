import React, { useEffect, useState } from "react";
import TodoItem from "../components/todo-item";
import axios from "axios";
import "../components/todo-item/todo.css";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    async function fetchTodos() {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      setTodos(response.data);
    }
    fetchTodos();
  }, []);
  return (
    <React.Fragment>
      <div className="todo-list">
        {todos.map((todo, index) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              // onTodoToggle={onTodoToggle}
              // onDeleteTodo={onDeleteTodo}
            ></TodoItem>
          );
        })}
      </div>
    </React.Fragment>
  );
}

TodoList.defaultProps = {
  todos: [],
};
