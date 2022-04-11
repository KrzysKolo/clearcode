import React, { useContext, useEffect, useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FriendDetailsStyles } from './FriendDetails.module.scss';
import { FriendContextType, FriendsContext } from '../../context/friendsContext';
import { useParams } from 'react-router-dom';
import { Friend } from "../../models/Friend";
import { FriendDetailsBox } from '../../components';

const style = bemCssModules(FriendDetailsStyles);

const FriendDetails = () => {
  const [friendDetails, setFriendDetails] = useState<Friend[]>([]);
  const { friendsList } = useContext(FriendsContext) as FriendContextType;
  const { id } = useParams();

  useEffect(() => {
    if (friendsList) {
      setFriendDetails(friendsList.filter((friend) => friend.id === id));
    }
  }, [friendsList, id]);
  console.log(friendDetails)
  return (
    <div className={style()}>
      {friendDetails.map((item) => <FriendDetailsBox key={item.id} friend={item} />)}
    </div>
  )
}

export default FriendDetails;