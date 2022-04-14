import React, { useContext, useEffect, useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FriendSearchStyles } from './FriendSearch.module.scss';
import { FriendContextType, FriendsContext } from '../../context/friendsContext';

const style = bemCssModules(FriendSearchStyles);

const FriendSearch: React.FC = () => {

  const { setSearchValue  } = useContext(FriendsContext) as FriendContextType;
  const [value, setValue] = useState<string>("");

  const handleChange = (e: { target: { value: string; }; }) => {
    setValue(e.target.value.toLowerCase());
  };

  useEffect(() => {
    setSearchValue(value);
  }, [value])

  return (
    <div className={style()}>
      <input
        className={style('input')}
        type="text"
        placeholder="Search by name"
        value={value}
        onChange={handleChange} />
    </div>
  )
}

export default FriendSearch;