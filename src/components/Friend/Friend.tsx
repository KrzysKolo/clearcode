import React, { useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FriendStyles } from './Friend.module.scss';
import { FriendProps } from './../../models/Friend';
import { Badges, Button } from '../';

const style = bemCssModules(FriendStyles);

const Friend: React.FC<FriendProps> = ({ friend, accept, remove }) => {

  const { firstName, lastName, status, photoUrl } = friend;

  return (
    <div className={style()}>
      <div className={style('imageBox')}>
        <img
          src={photoUrl}
          alt={firstName}
          className={style('image')} />
      </div>
      <div className={style('personBox')}>
        <div className={style('fullName')}>
          <h1>{firstName} {lastName}</h1>
        </div>
        <div className={style('statusBox')}>
          <Badges title={status} />
        </div>
      </div>
      <div className={style('buttonsBox')}>
        <Button title="Reject" onClick={remove} />
        <Button title="Accept" variant={true} onClick={accept}  />
      </div>
    </div>
  )
}

export default Friend;