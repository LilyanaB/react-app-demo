import { IoTrash, IoCheckmarkSharp, IoPencilSharp } from "react-icons/io5";
import { useState } from "react";

import React from "react";
const List = ({ item, removeItem, editItem }) => {
  const { id, title } = item;
  const [completed, setComeplted] = useState(false);
  const markCompleted = () => {
    // const individualItem = items.find((item) => item.id === id);
    // if (individualItem) {
    setComeplted(true);
    //   console.log(id, completed);
  };

  return (
    <div className="todo-list flex-column">
      <article
        key={id}
        className={completed ? "flex flex-row div-disabled" : "todo-item flex "}
      >
        <p className="title">{title}</p>
        <div className="btn-container flex flex-row gap1">
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
