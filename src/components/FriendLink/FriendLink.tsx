import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FriendLinkStyles } from './FriendLink.module.scss';
import { FriendProps } from './../../models/Friend';
import Button from '../Button';
import Badges from '../Badges';

const style = bemCssModules(FriendLinkStyles);

const FriendLink: React.FC<FriendProps> = (props) => {
  const { firstName, lastName, status, photoUrl } = props;

  return (
    <div className={style()}>
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
      <div className={style('buttonsBox')}>
        <Button title="Reject" />
        <Button title="Accept" variant={true} />
      </div>
    </div>
  )
}

export default FriendLink;