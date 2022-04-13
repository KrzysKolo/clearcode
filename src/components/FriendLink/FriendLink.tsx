import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { default as bemCssModules } from 'bem-css-modules';
import { default as FriendLinkStyles } from './FriendLink.module.scss';
import { FriendProps } from './../../models/Friend';
import Button from '../Button';
import Badges from '../Badges';
import { FriendContextType, FriendsContext } from '../../context/friendsContext';

const style = bemCssModules(FriendLinkStyles);

const FriendLink: React.FC<FriendProps> = ({ friend, remove }) => {
  const { firstName, lastName, status, photoUrl, id } = friend;
  const { newFirstName, newLastName} = useContext(FriendsContext) as FriendContextType;

  return (
  <>
    <div className={style()}>
      <Link to={`/friends/${id}`} className={style('link')}>
        <div className={style('imageBox')}>
          <img src={photoUrl} alt={firstName} className={style('image')} />
        </div>
        <div className={style('personBox')}>
          <div className={style('fullName')}>
            <h1>{firstName} {lastName}</h1>
          </div>
          <div className={style('statusBox')}>
            <Badges title={status} variant={true} />
          </div>
        </div>
      </Link>
      <div className={style('buttonsBox')}>
        <Button title="Remove" onClick={remove} />
      </div>
    </div>
  </>


  )
}

export default FriendLink;