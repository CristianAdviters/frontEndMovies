import React, { useState } from "react";
import "./userEditReview.css";
import { Link, useNavigate } from "react-router-dom";
import "./userEditReview.css";

const UserEditReview = () => {
  const navigate = useNavigate();

  return (
    <>
      <label className="label-review">Make your review</label>
      <form className="textarea-div">
        <textarea
          cols={50}
          rows={10}
          minLength={200}
          maxLength={600}
          required
        ></textarea>

        <input type="submit" className="review-button" />
      </form>
    </>
  );
};

export default UserEditReview;

<Link to="/home">Home</Link>;
