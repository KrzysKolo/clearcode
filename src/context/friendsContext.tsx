import React, { createContext, useEffect, useState } from "react";
import friends from "../dataFixtures/friends";
import { Friend } from "../models/Friend";



export type FriendContextType = {
  friendsList: Friend[];
  isLoading: boolean;
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

  useEffect(() => {
    getList();
  }, []);

return (
  <FriendsContext.Provider value={{ friendsList, isLoading }}>
    {children}
  </FriendsContext.Provider>
);
};

export default FriendsProvider;