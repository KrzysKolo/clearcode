import React, { useContext, useState } from 'react';
import { FriendProps, Status } from '../../models/Friend';
import Friend from '../Friend/Friend';
import FriendLink from '../FriendLink';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FriendBoxStyles } from './FriendBox.module.scss';
import { FriendContextType, FriendsContext } from '../../context/friendsContext';
import { useNavigate } from 'react-router';


const style = bemCssModules(FriendBoxStyles);

const FriendBox: React.FC<FriendProps> = ({ friend }) => {

  const { removeFriend, acceptFriend, setStateStatus, stateStatus} = useContext(FriendsContext) as FriendContextType;
  const { firstName, lastName, status, photoUrl, id } = friend;

  let navigate = useNavigate();

  const handleChangePendingToAccept = () => {
    acceptFriend(id);
    setStateStatus('ACCEPTED')
  };

  const handleRemoveFriend = () => {
    removeFriend(id);
  };

  return (
    <div className={style()}>
      {status === "ACCEPTED"  ? <FriendLink friend={friend} remove={handleRemoveFriend} /> : <Friend friend={friend} accept={handleChangePendingToAccept} remove={handleRemoveFriend} />}
    </div>
  )
}

export default FriendBox;


