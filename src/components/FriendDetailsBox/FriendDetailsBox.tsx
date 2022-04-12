import React, { useContext, useEffect, useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FriendDetailsBoxStyles } from './FriendDetailsBox.module.scss';
import { Friend, FriendProps } from '../../models/Friend';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

const style = bemCssModules(FriendDetailsBoxStyles);

const FriendDetailsBox: React.FC<FriendProps> = ({ friend }) => {

  const { firstName, lastName, status, photoUrl } = friend;

  let navigate = useNavigate();
  const handleBackToList = () => {
    navigate('/friends')
  };
  const editName = () => {
    console.log("edytuj")
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

    </>
  )
}

export default FriendDetailsBox;