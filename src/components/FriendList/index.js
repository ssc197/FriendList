import React, { useState } from "react";
import "./style.scss";
const FriendList = ({ friendsList, addToFav, deleteFriend }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [friendPerPage, setFriendPerPage] = useState(4);
  const [search, setSearch] = useState({search:""});

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const searchHandler =(e)=>{ 
    console.log(e)

  }

  // Logic for displaying current todos
  const indexOfLastFriend = currentPage * friendPerPage;
  const indexOfFirstFriend = indexOfLastFriend - friendPerPage;
  const currentFriend = friendsList.slice(
    indexOfFirstFriend,
    indexOfLastFriend
  );

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(friendsList.length / friendPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li key={number} id={number} onClick={handleClick}>
        {number}
      </li>
    );
  });

  let _friendsList =
    currentFriend &&
    currentFriend.map((friend) => {
      return (
        <div className="list" key={friend.id}>
          <div className="leftBox">
            <div className="name">{friend.name}</div>
            <div className="desc">is your friend</div>
          </div>
          <div className="rightBox">
            <span className={`${friend.isFav ? "fav" : ""} icon-container`}>
              <i className="material-icons" onClick={() => addToFav(friend.id)}>
                star
              </i>
            </span>
            <span className="delete icon-container">
              <i
                className="material-icons"
                onClick={() => deleteFriend(friend.id)}
              >
                delete
              </i>
            </span>
          </div>
        </div>
      );
    });
  return (
    <div className="friend section">
      <div className="search-container">
      <h5>List of Friends</h5>
      <div>
      <div className="input-field col s6">
          <input id="search" type="text" className="validate" onChange={searchHandler}/>
          <label htmlFor="search">Search</label>
       </div>

      </div>
      </div>
      
      {_friendsList}
      <ul className="page-numbers">{renderPageNumbers}</ul>
    </div>
  );
};

export default FriendList;
