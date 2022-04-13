import React, { useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FriendDetailsBoxStyles } from './FriendDetailsBox.module.scss';
import { Button, FriendEdit } from '../';
import { FriendProps } from '../../models/Friend';
import { useNavigate } from 'react-router-dom';


const style = bemCssModules(FriendDetailsBoxStyles);

const FriendDetailsBox: React.FC<FriendProps> = ({ friend }) => {

  const { firstName, lastName, status, photoUrl } = friend;
  const [showFormEditFriend, setShowEditFriend] = useState<boolean>(false);

  let navigate = useNavigate();
  const handleBackToList = () => {
    navigate('/friends')
  };

  const editName = () => {
    setShowEditFriend(prev => !prev);
  };

  return (
    <>
      <div className={style()}>
        <div className={style("button")}>
          <Button title="<< Back to list" variant={true} onClick={handleBackToList}  />
        </div>
        <div className={style('user')}>
          <div className={style('images')}>
            <img src={photoUrl} />
          </div>
          <div className={style('nameBox')} >
            <div className={style('name')}>
              <h1>{firstName} {lastName}</h1>
            </div>
            <div>
              <Button title='Edit Name' onClick={editName} />
            </div>
          </div>
        </div>
      </div>
      <FriendEdit showFormEditFriend={showFormEditFriend} setShowEditFriend={setShowEditFriend} friend={friend} />
    </>
  )
}

export default FriendDetailsBox;