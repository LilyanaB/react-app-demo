import { IoTrash, IoCheckmarkSharp, IoPencilSharp } from "react-icons/io5";

import React from "react";
const List = ({ item, removeItem, editItem, list, setList }) => {
  const { id, title, status } = item;
  const completedHandler = () => {
    setList(
      list.map((todo) => {
        if (todo.id === id)
          return {
            ...todo,
            status: !todo.status,
          };
        return todo;
      })
    );
  };

  return (
    <div className="todo-list">
      <article
        className={status ? "flex flex-row div-disabled" : "todo-item flex "}
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
            onClick={() => completedHandler()}
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
