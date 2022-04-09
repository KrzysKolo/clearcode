import React, { useContext} from 'react';
import { FriendContextType, FriendsContext } from '../../context/friendsContext';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FriendsStyles } from './Friends.module.scss';

const style = bemCssModules(FriendsStyles);

const Friends: React.FC = () => {
  const { friendsList } = useContext(FriendsContext) as FriendContextType;
  console.log(friendsList)
  const people = friendsList.map(item => <p key={item.id}>{item.firstName}{item.lastName}</p>)
  return (
    <main className={style()}>

      {people}
    </main>
  )
}

export default Friends;