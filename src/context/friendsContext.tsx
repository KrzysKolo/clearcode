import React, { createContext, useEffect, useState } from "react";
import friends from "../dataFixtures/friends";
import { Friend } from "../models/Friend";



export type FriendContextType = {
  friendsList: Friend[];
}

export const FriendsContext = createContext<FriendContextType | null>(null);


const FriendsProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [friendsList, setFriendsList] = useState<Friend[]>([])

  function getList() {
    setFriendsList(friends);
  };

  useEffect(() => {
    getList();
  }, []);

return (
  <FriendsContext.Provider value={{ friendsList }}>
    {children}
  </FriendsContext.Provider>
);
};

export default FriendsProvider;