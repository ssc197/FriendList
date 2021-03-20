import { useState, useEffect, useMemo } from "react";
import FriendList from "../FriendList";
import AddFriend from "../AddFriend";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";
import Modal from "../../components/Modal";

import axios from "axios";
const Friend = () => {
const BASE_URL = "/api/friends";

  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loader, showLoader, hideLoader] = Loader();
  const [isVisible, setIsVisible] = useState(false);
  const [friendId, setFriendId] = useState(""); 
  const [isloaded, setIsLoaded] = useState(false);
  const ITEMS_PER_PAGE = 4;
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    showLoader();
    setIsLoaded(false);
    axios
      .get(`${BASE_URL}`)
      .then(({ data }) => {
        setIsLoaded(true);
        hideLoader();
        data.sort(function (x, y) {
          return x.isFav === y.isFav ? 0 : x.isFav ? -1 : 1;
        });
        setData(data);
      })
      .catch(console.error)
      .finally();
  };

  const searchFriend = (key) => {
    setSearch(key);
    setCurrentPage(1);
  };

  // Memo for Pagination computauon

  const _data = useMemo(() => {
    let computedData = data;
    if (search) {
      computedData = computedData.filter((friend) =>
        friend.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setTotalItems(computedData.length);

    // Current pge slice
    return computedData.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [data, currentPage, search]);

  const addFriend = (friend) => {
    let name = friend.name;
    axios
      .post(`${BASE_URL}/add`, { name })
      .then(({ data }) => getData())
      .catch(console.error)
      .finally();
   };

  const deleteFriend = () => {
    axios
      .post(`${BASE_URL}/delete/${friendId}`)
      .then(({ res }) => {setIsVisible(false);getData()})
      .catch(console.error)
      .finally();
    // setData([...data, friend]);
    // let friend = data.filter((friend) => {
    //   return friend.id !== id;
    // });
    // setData(friend);
  };

  const addToFav = (data) => {
     let isFav = null;
    if (data.isFav) {
      isFav = false;
    } else {
      isFav = true;
    }
    axios
      .post(`${BASE_URL}/update/${data._id}`, { isFav })
      .then(({ res }) => getData())
      .catch(console.error)
      .finally();
    // setData([...data, friend]);
 
    // let index = data.findIndex(x=> x.id === data.id);
    // if(index !==-1){
    //     if(data[index].isFav){
    //         data[index].isFav=false
    //         data[index].isFav=true;
    //     }
    //     data.sort(function(x, y) {
    //         return (x.isFav === y.isFav)? 0 : x.isFav? -1 : 1;
    //     });
    //     setData([...data]);
    // }
  };

  return (
    <div className="friend-list container">
      <AddFriend addFriend={addFriend} />
      {loader}
      {isloaded ? (
        <div className="wrapper">
          <FriendList
            data={_data}
            addToFav={addToFav}
            deleteFriend={deleteFriend}
            searchFriend={searchFriend}
            setIsVisible = {setIsVisible}
            setFriendId = {setFriendId}
          />
          <Pagination
            total={totalItems}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
      <Modal isVisible={isVisible} setIsVisible={setIsVisible} onSuccessHandler={() => deleteFriend()} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Friend;
