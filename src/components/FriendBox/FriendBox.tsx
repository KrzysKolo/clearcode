import React, { useState } from 'react';
import { FriendProps } from '../../models/Friend';
import Friend from '../Friend/Friend';
import FriendLink from '../FriendLink';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FriendBoxStyles } from './FriendBox.module.scss';


const style = bemCssModules(FriendBoxStyles);

const FriendBox: React.FC<FriendProps> = ({ friend }) => {

  const { firstName, lastName, status, photoUrl } = friend;
  const [stateStatus, setStateStatus] = useState<string>(status)
    const handleChangePaggingToAccept = () => {
      console.log("zmieniam")
      console.log(stateStatus)
      setStateStatus("ACCEPTED");

  }
  console.log(stateStatus)
  console.log(status)
  return (
    <div className={style()}>
      {stateStatus === "ACCEPTED"  ? <FriendLink friend={friend}  /> : <Friend friend={friend} onClick={handleChangePaggingToAccept} />}
    </div>
  )
}

export default FriendBox;