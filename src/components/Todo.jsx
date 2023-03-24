import { useState } from "react";
import TodoItem from "./TodoItem";
import "../css/Todo.css";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    const newTodo = {
      id: Math.random().toString(36).substring(7),
      title: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id, title) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title };
        }
        return todo;
      })
    );
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDeleteTodo}
            onEdit={handleEditTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default Todo;
