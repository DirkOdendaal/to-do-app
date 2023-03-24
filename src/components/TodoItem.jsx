import { useState } from "react";
import "../css/TodoItem.css";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineSave,
  AiOutlineClose,
} from "react-icons/ai";

function TodoItem({ todo, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.title);

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(todo.id, editValue);
    setIsEditing(false);
  };

  const handleCheckboxChange = (e) => {
    onEdit(todo.id, todo.title, e.target.checked);
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {!isEditing ? (
        <>
          <div className="right-side">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleCheckboxChange}
              />
              <span className="checkmark"></span>
            </label>
            <p>{todo.title}</p>
          </div>
          <div className="buttons">
            <AiOutlineEdit className="edit" size={25} onClick={handleEdit} />
            <AiOutlineDelete
              className="delete"
              size={25}
              onClick={handleDelete}
            />
          </div>
        </>
      ) : (
        <form onSubmit={handleEditSubmit}>
          <input type="text" value={editValue} onChange={handleEditChange} />
          <button type="submit">
            <AiOutlineSave size={20} />
          </button>
          <button onClick={() => setIsEditing(false)}>
            <AiOutlineClose size={20} />
          </button>
        </form>
      )}
    </div>
  );
}

export default TodoItem;
