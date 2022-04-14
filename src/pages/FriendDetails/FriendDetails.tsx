import React, { useContext, useEffect, useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FriendDetailsStyles } from './FriendDetails.module.scss';
import { FriendContextType, FriendsContext } from '../../context/friendsContext';
import { Friend } from "../../models/Friend";
import { FriendDetailsBox } from '../../components';
import { useParams } from 'react-router-dom';

const style = bemCssModules(FriendDetailsStyles);

const FriendDetails: React.FC = () => {

  const [friendDetails, setFriendDetails] = useState<Friend[]>([]);
  const { filteredFriend } = useContext(FriendsContext) as FriendContextType;
  const { id } = useParams();

  useEffect(() => {
    if (filteredFriend) {
      setFriendDetails(filteredFriend.filter((friend) => friend.id === id));
    }
  }, [filteredFriend, id]);

  return (
    <div className={style()}>
      {friendDetails.map((item) => <FriendDetailsBox key={item.id} friend={item} />)}
    </div>
  )
}

export default FriendDetails;