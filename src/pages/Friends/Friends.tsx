import React, { useContext} from 'react';
import { FriendContextType, FriendsContext } from '../../context/friendsContext';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FriendsStyles } from './Friends.module.scss';
import { Header, Loading, FriendsList } from '../../components';

const style = bemCssModules(FriendsStyles);

const Friends: React.FC = () => {
  const { friendsList, isLoading } = useContext(FriendsContext) as FriendContextType;

  return (
    <main className={style()}>
      <Header />
      {isLoading
      ? <Loading />
      : <FriendsList />
      }
    </main>
  )
}

export default Friends;