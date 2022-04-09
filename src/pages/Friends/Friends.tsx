import React, { useContext, useEffect, useState} from 'react';
import { FriendContextType, FriendsContext } from '../../context/friendsContext';
import  friends  from '../../dataFixtures/friends';
import { Friend } from '../../models/Friend';



const Friends: React.FC = () => {
/*   const [friendsList, setFriendsList] = useState<Friend[]>([])

  function getList() {
    setFriendsList(friends);
  }

  useEffect(() => {
   getList();
  }, []) */
  const { friendsList } = useContext(FriendsContext) as FriendContextType;
  console.log(friendsList)
  const people = friendsList.map(item => <p key={item.id}>{item.firstName}{item.lastName}</p>)
  return (
    <div>
      {people}
    </div>
  )
}

export default Friends;