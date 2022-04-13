import React, { useContext, useEffect, useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FriendsStyles } from './Friends.module.scss';
import { FriendContextType, FriendsContext } from '../../context/friendsContext';
import Friend from '../Friend/Friend';
import FriendBox from '../FriendBox';
import FriendSearch from '../FriendSearch';
import Paginate from '../Paginate';

const style = bemCssModules(FriendsStyles);

const FriendsList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(9);
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;

  const { filteredFriend } = useContext(FriendsContext) as FriendContextType;
  console.log(filteredFriend);
  const currentEmployees = filteredFriend.slice(indexOfFirstEmployee, indexOfLastEmployee);
  const people = currentEmployees.map((item) => <FriendBox key={item.id} friend={item} />)
  const totalPagesNum = Math.ceil(filteredFriend.length / employeesPerPage);
  return (
    <>
    <FriendSearch />
      <div className={style()}>

      {people}
      </div>
      <Paginate pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentEmployees ={currentEmployees}
                filteredFriend = {filteredFriend} />
    </>
  )
}

export default FriendsList;