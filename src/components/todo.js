import React, { useState } from "react";

export default function Todo(props) {
  const { todo, onUpdate, onDelete } = props;
  const [isEdit, setIsEdit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(todo.title);

    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value);
    }

    function handleClickUpdateTodo(e) {
      onUpdate(todo.id, newValue);
      setIsEdit(false);
    }

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          className="todoUpdateFormValue"
          type="text"
          onChange={handleChange}
          value={newValue}
        />
        <button className="btn-update" onClick={handleClickUpdateTodo}>
          Update
        </button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <div className="todoInfo">
        <div className="todoTitle">{todo.title}</div>
        <button className="btn-edit" onClick={() => setIsEdit(true)}>
          Edit
        </button>
        <button className="btn-delete" onClick={() => onDelete(todo.id)}>
          Delete
        </button>
      </div>
    );
  }

  function PrintElements() {
    return (
      <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>
    );
  }

  return <PrintElements />;
}
