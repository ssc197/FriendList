import { useState,useEffect} from "react";
import "./style.scss";
 
const FriendList = ({ data, addToFav, deleteFriend ,searchFriend, setIsVisible, setFriendId}) => {

  // console.log('frist',data)
  const [filterData, setFilterData] = useState([])
  const [search, setSearch] = useState("")
  
  useEffect(() => {
    setFilterData(data)
  }, [data]);


  const inputChange =value=>{ 
     setSearch(value)
     searchFriend(value)

  }
  let _friendsList =
  filterData &&
  filterData.map((friend) => {
      return (
        <div className="list" key={friend._id}>
          <div className="leftBox">
            <div className="name">{friend.name}</div>
            <div className="desc">is your friend</div>
          </div>
          <div className="rightBox">
            <span className={`${friend.isFav ? "fav" : ""} icon-container`} onClick={() => addToFav(friend)}>
              <i className="material-icons" >
                star
              </i>
            </span>
            <span className="delete icon-container"  onClick={() => {setFriendId(friend._id) ;setIsVisible(true)} }>
              <i
                className="material-icons"
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
          <input id="search" type="text" className="validate" onChange={e=>inputChange(e.target.value)} value ={search}/>
          <label htmlFor="search">Search</label>
       </div>

      </div>
      </div>
      
      {_friendsList}
 
     </div>
  );
};

export default FriendList;
