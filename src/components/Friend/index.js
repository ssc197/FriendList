import React, { useState } from "react";
import FriendList from "../FriendList";
import AddFriend from "../AddFriend";
const Friend = () => {
  const [friendsList, setFriendsList] = useState([
    {
      id: 1,
      name: "Sajeed",
    },
    {
      id: 2,
      name: "Raj",
    },
  ]);

  const addFriend = (friend) => {
    friend.id = Math.random();
    setFriendsList([...friendsList, friend]);
    console.log(friendsList);
  };

  const deleteFriend = (id) => {
    let friend = friendsList.filter((friend) => {
      return friend.id !== id;
    });
    setFriendsList(friend);
  };

  const addToFav = (id) => {
    let index = friendsList.findIndex(x=> x.id === id);
    if(index !==-1){
        if(friendsList[index].isFav){
            friendsList[index].isFav=false
        }else{
            friendsList[index].isFav=true;
        }
        friendsList.sort(function(x, y) { 
            return (x.isFav === y.isFav)? 0 : x.isFav? -1 : 1;
        }); 
        setFriendsList([...friendsList]);
    }
      };

  return (
    <div className="friend-list section">
      <AddFriend addFriend={addFriend} />
      <FriendList
        friendsList={friendsList}
        addToFav={addToFav}
        deleteFriend={deleteFriend}
      />
    </div>
  );
};

export default Friend;
