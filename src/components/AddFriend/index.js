import React, { useState, useEffect } from "react";
import "./style.scss";

const AddFriend = (props) => {
  const [formData, setformData] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addFriend(formData);
    // console.log(formData);
    document.getElementById("addForm").reset();

    // this.props.addNinja(formData);
  };

  return (
    <div className="add-friend section">
      <form id="addForm" onSubmit={handleSubmit}>
        <div className="input-field">
          <input type="text" id="name" onChange={handleChange} />
          <label htmlFor="name">Enter your friend's name:</label>

        </div>
      </form>
    </div>
  );
};

export default AddFriend;
