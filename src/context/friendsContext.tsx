import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import friends from "../dataFixtures/friends";
import { Friend, Status } from "../models/Friend";



export type FriendContextType = {
  friendsList?: Friend[];
  filteredFriend: Friend[];
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  stateStatus: string;
  setStateStatus: Dispatch<SetStateAction<string>>;
  newLastName: string;
  newFirstName: string;
  setNewFirstName: Dispatch<SetStateAction<string>>;
  setNewLastName: Dispatch<SetStateAction<string>>;
  isLoading: boolean;

  removeFriend: (id: string) => void;
  acceptFriend: (id: string) => void;
  updateFriend: (id: string) => void;
 /*  updateFriend: (status: STATUS) => void; */
}

export const FriendsContext = createContext<FriendContextType | null>(null);


const FriendsProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [friendsList, setFriendsList] = useState<Friend[]>([]);
  const [filteredFriend, setFilteredFriend] =useState<Friend[]>([]);
	const [searchValue, setSearchValue] =useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [stateStatus, setStateStatus] = useState<string>(status)
  const [newFirstName, setNewFirstName] = useState<string>('')
  const [newLastName, setNewLastName] = useState<string>('')
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

  const removeFriend = (id: string) => {
    setFriendsList([...friendsList.filter(item => item.id !== id)]);
  };

  const acceptFriend = (id: string) => {
    setFriendsList(friendsList.map(item => {
      return item.id === id ? { ...item, status: Status.ACCEPTED, } : item;
    }))
  };
console.log(newFirstName)
  const updateFriend = (id: string) => {
    console.log(newFirstName)
    setFilteredFriend(friendsList.map(item => {
      return item.id === id ? { ...item, id: item.id, firstName: newFirstName, lastName: newLastName,  } : item;
    }))

  };



  useEffect(() => {
    if (searchValue.trim() === "") {
      setFilteredFriend(friendsList);
      return;
    }
    else {
      if (searchValue.trim() !== "") {
        setFilteredFriend(
          friendsList.filter((friend) => {
            const fullName = `${friend.firstName} ${friend.lastName}`;
            return fullName
              .toLowerCase()
              .split(" ")
              .join("")
              .includes(searchValue.toLowerCase().split(" ").join(""));
          })
        )
      }
    }
    }, [searchValue, friendsList]);


return (
  <FriendsContext.Provider value={{ filteredFriend, isLoading, removeFriend, acceptFriend, updateFriend, searchValue, setSearchValue, setStateStatus, stateStatus, newLastName, newFirstName, setNewFirstName, setNewLastName }}>
    {children}
  </FriendsContext.Provider>
);
};

export default FriendsProvider;


