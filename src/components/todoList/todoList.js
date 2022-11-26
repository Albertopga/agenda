import Todo from "components/todo";
import React, { useState } from "react";
import "./todoList.css";

export default function TodoApp() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    setTitle(value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
  }
  function handleUpdate(id, newValue) {
    const temp = [...todos];
    const todo = temp.find((todo) => todo.id === id);
    todo.title = newValue;
    setTodos(temp);
  }
  function handleDelete(id) {
    let temp = [...todos];
    temp = temp.filter((todo) => todo.id !== id);
    setTodos(temp);
  }

  return (
    <div className="todoContainer">
      <form onSubmit={handleSubmit} className="todoCreateForm">
        <input onChange={handleChange} className="todoInput" value={title} />
        <input
          onClick={handleSubmit}
          className="buttonCreate"
          type="submit"
          value="Crear tarea"
        />
      </form>
      <div className="todosContainer">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
