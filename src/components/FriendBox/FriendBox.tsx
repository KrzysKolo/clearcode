import React, { useContext, useState } from 'react';
import { FriendProps } from '../../models/Friend';
import Friend from '../Friend/Friend';
import FriendLink from '../FriendLink';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FriendBoxStyles } from './FriendBox.module.scss';
import { FriendContextType, FriendsContext } from '../../context/friendsContext';


const style = bemCssModules(FriendBoxStyles);

const FriendBox: React.FC<FriendProps> = ({ friend }) => {

  const { removeFriend } = useContext(FriendsContext) as FriendContextType;
  const { firstName, lastName, status, photoUrl, id } = friend;
  const [stateStatus, setStateStatus] = useState<string>(status)

  const handleChangePendingToAccept = () => {
    setStateStatus("ACCEPTED");
  };

  const handleRemoveFriend = () => {
    removeFriend(id);
  };

  console.log(stateStatus)
  console.log(status)
  return (
    <div className={style()}>
      {stateStatus === "ACCEPTED"  ? <FriendLink friend={friend} remove={handleRemoveFriend} /> : <Friend friend={friend} accept={handleChangePendingToAccept} remove={handleRemoveFriend} />}
    </div>
  )
}

export default FriendBox;