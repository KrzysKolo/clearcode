import React, { useContext } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FriendsStyles } from './Friends.module.scss';
import { FriendContextType, FriendsContext } from '../../context/friendsContext';
import Friend from '../Friend/Friend';
import FriendBox from '../FriendBox';

const style = bemCssModules(FriendsStyles);

const FriendsList: React.FC = () => {


  const { friendsList } = useContext(FriendsContext) as FriendContextType;
  console.log(friendsList)
  const people = friendsList.map((item) => <FriendBox key={item.id} friend={item} />)

  return (
    <div className={style()}>
      {people}
    </div>
  )
}

export default FriendsList;