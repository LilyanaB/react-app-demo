import { IoTrash, IoCheckmarkSharp, IoPencilSharp } from "react-icons/io5";
import { useState } from "react";

import React from "react";
const List = ({ item, removeItem, editItem }) => {
  const { id, title, status } = item;
  const [completed, setComeplted] = useState(false);
  const markCompleted = () => {
    setComeplted(true);
  };

  return (
    <div className="todo-list">
      <article
        className={completed ? "flex flex-row div-disabled" : "todo-item flex "}
        key={id}
      >
        <p className="title">{title}</p>
        <div className="btn-container flex flex-row gap-1">
          <button
            type="button"
            className="btn-list list-btn-edit"
            onClick={() => editItem(id)}
          >
            <IoPencilSharp />
          </button>
          <button
            type="button"
            className="btn-list list-btn-complete"
            onClick={() => markCompleted()}
          >
            <IoCheckmarkSharp />
          </button>

          <button
            type="button"
            className="btn-list list-btn-delete"
            onClick={() => removeItem(id)}
          >
            <IoTrash />
          </button>
        </div>
      </article>
    </div>
  );
};

export default List;
