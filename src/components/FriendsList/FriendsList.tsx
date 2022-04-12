import React, { useContext } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FriendsStyles } from './Friends.module.scss';
import { FriendContextType, FriendsContext } from '../../context/friendsContext';
import Friend from '../Friend/Friend';
import FriendBox from '../FriendBox';
import FriendSearch from '../FriendSearch';

const style = bemCssModules(FriendsStyles);

const FriendsList: React.FC = () => {


  const { filteredFriend } = useContext(FriendsContext) as FriendContextType;
  console.log(filteredFriend)
  const people = filteredFriend.map((item) => <FriendBox key={item.id} friend={item} />)

  return (
    <>
    <FriendSearch />
    <div className={style()}>

      {people}
    </div>
    </>
  )
}

export default FriendsList;