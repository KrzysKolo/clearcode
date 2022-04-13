import React, { useContext, useEffect, useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FriendsStyles } from './Friends.module.scss';
import { FriendContextType, FriendsContext } from '../../context/friendsContext';
import { FriendBox, FriendSearch, Pagination } from './../';

const style = bemCssModules(FriendsStyles);

const FriendsList: React.FC = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [friendsPerPage] = useState(9);
  const indexOfLastFriend = currentPage * friendsPerPage;
  const indexOfFirstFriend = indexOfLastFriend - friendsPerPage;
  const { filteredFriend } = useContext(FriendsContext) as FriendContextType;
  const currentFriends = filteredFriend.slice(indexOfFirstFriend, indexOfLastFriend);
  const people = currentFriends.map((item) => <FriendBox key={item.id} friend={item} />)
  const totalPagesNum = Math.ceil(filteredFriend.length / friendsPerPage);

  return (
    <>
      <FriendSearch />
      <div className={style()}>
        {people}
      </div>
      <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentFriends ={currentFriends}
                filteredFriend = {filteredFriend} />
    </>
  )
}

export default FriendsList;