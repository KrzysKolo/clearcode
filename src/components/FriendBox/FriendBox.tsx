import React, { useContext } from 'react';
import { FriendProps } from '../../models/Friend';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FriendBoxStyles } from './FriendBox.module.scss';
import { Friend, FriendLink } from '../';
import { FriendContextType, FriendsContext } from '../../context/friendsContext';

const style = bemCssModules(FriendBoxStyles);

const FriendBox: React.FC<FriendProps> = ({ friend }) => {

  const {
    removeFriend,
    acceptFriend,
    setStateStatus } = useContext(FriendsContext) as FriendContextType;
  const {status, id } = friend;

  const handleChangePendingToAccept = () => {
    acceptFriend(id);
    setStateStatus('ACCEPTED')
  };

  const handleRemoveFriend = () => {
    removeFriend(id);
  };

  return (
    <div className={style()}>
      {status === "ACCEPTED"
        ? <FriendLink
          friend={friend}
          remove={handleRemoveFriend} />
        : <Friend
          friend={friend}
          accept={handleChangePendingToAccept}
          remove={handleRemoveFriend} />}
    </div>
  )
}

export default FriendBox;


