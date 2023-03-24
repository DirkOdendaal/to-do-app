import { useState } from "react";
import "../css/TodoItem.css";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  // AiOutlineCheck,
  // AiOutlineClose,
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

  return (
    <div className="todo-item">
      {!isEditing ? (
        <>
          <p>{todo.title}</p>
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
          <button type="submit">Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      )}
    </div>
  );
}

export default TodoItem;
