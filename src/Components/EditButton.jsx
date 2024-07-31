import React from "react";
import { Link, useNavigate } from "react-router-dom";

const EditButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/user-edit-review")}>Edit Review</button>
    </>
  );
};

export default EditButton;
