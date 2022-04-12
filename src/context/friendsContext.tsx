import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import friends from "../dataFixtures/friends";
import { Friend } from "../models/Friend";



export type FriendContextType = {
  friendsList: Friend[];
  isLoading: boolean;
  removeFriend: (id: string) => void;
 /*  updateFriend: (status: STATUS) => void; */
}

export const FriendsContext = createContext<FriendContextType | null>(null);


const FriendsProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [friendsList, setFriendsList] = useState<Friend[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  function getList() {
    let timer = setTimeout(() => {
      setFriendsList(friends);
      setIsLoading(false);
      clearTimeout(timer)
    }, 1000);

  };

  const removeFriend = (id: string) => {
    setFriendsList([...friendsList.filter(item => item.id !== id)]);
  };

  useEffect(() => {
    getList();
  }, []);

return (
  <FriendsContext.Provider value={{ friendsList, isLoading, removeFriend }}>
    {children}
  </FriendsContext.Provider>
);
};

export default FriendsProvider;