import React, { useRef, useState } from "react";
import "./style.scss";

const AddFriend = (props) => {
  const [formData, setformData] = useState({
    name: "",
  });
  const [isnameEmpty, setIsNameEmpty]= useState(true);

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.name){
      props.addFriend(formData);
    }else{
      setIsNameEmpty(false);
    }
    document.getElementById("addForm").reset();
    setformData({name:""})
    setTimeout(() => {
      setIsNameEmpty(true);
    }, 1000);

    // this.props.addNinja(formData);
  };

  return (
    <div className="add-friend section">
      <form id="addForm" onSubmit={handleSubmit}>
        <div className="input-field">
          <input type="text" id="name" onChange={handleChange} />
          <label htmlFor="name">Enter your friend's name:</label>
          {!isnameEmpty?(<span className="red-text">Please enter Friends name</span>):("")}
        </div>
      </form>
    </div>
  );
};

export default AddFriend;
