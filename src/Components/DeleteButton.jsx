import React from "react";

const confirmDelete = () =>{
  alert('yeah')
}

const DeleteButton = () => {
  return (
    <>
      <button onClick={confirmDelete}>Delete review</button>
    </>
  );
};

export default DeleteButton;
