import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FriendDetailsBoxStyles } from './FriendDetailsBox.module.scss';
import { FriendProps } from '../../models/Friend';

const style = bemCssModules(FriendDetailsBoxStyles);

const FriendDetailsBox:React.FC<FriendProps> = ({ friend}) => {
  const { firstName, lastName, status, photoUrl } = friend;
  const handleBasckToList = () => {
    console.log("wracamy do listy")
  }
  return (
    <div className={style()}>
      <div>
        <img src={photoUrl} />
      </div>
      <div>
        <h1>{firstName} {lastName}</h1>
        <h2>{status}</h2>
      </div>
      <div>
        <button onClick={handleBasckToList}>back to list</button>
      </div>
    </div>
  )
}

export default FriendDetailsBox;