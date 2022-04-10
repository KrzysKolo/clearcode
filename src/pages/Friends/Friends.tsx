import React, { useContext} from 'react';
import { FriendContextType, FriendsContext } from '../../context/friendsContext';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FriendsStyles } from './Friends.module.scss';
import { Header, Loading } from '../../components';
import Loader from 'react-ts-loaders/dist';

const style = bemCssModules(FriendsStyles);

const Friends: React.FC = () => {
  const { friendsList, isLoading } = useContext(FriendsContext) as FriendContextType;
  console.log(friendsList)
  const people = friendsList.map(item => <p key={item.id}>{item.firstName}{item.lastName}</p>)
  return (
    <main className={style()}>
      <Header />
      {isLoading && <Loading />}
      {people}
    </main>
  )
}

export default Friends;