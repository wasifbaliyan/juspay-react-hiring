import React, { useState } from "react";

export default function MidArea({ handleClick, setTasks, tasks }) {
  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");
    const cardCopy = document.getElementById(card_id).cloneNode(true);
    setTasks([...tasks, { name: cardCopy.id }]);
    cardCopy.addEventListener("click", () => handleClick(cardCopy.id));
    cardCopy.id = "new_" + cardCopy.id;
    e.target.appendChild(cardCopy);
  };
  const dragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };
  return (
    <div
      id="target"
      onDrop={drop}
      onDragOver={dragOver}
      className="flex-1 h-full overflow-auto mx-16"
    ></div>
  );
}
