import React, { useState } from 'react';
import { FriendProps } from '../../models/Friend';
import Friend from '../Friend/Friend';
import FriendLink from '../FriendLink';

const FriendBox: React.FC<FriendProps> = ({ friend}) => {
  const { firstName, lastName, status, photoUrl } = friend;
  const [stateStatus, setStateStatus] = useState(status)
  console.log(status)
  return (
    <div>
      {stateStatus === "ACCEPTED"  ? <FriendLink friend={friend} /> : <Friend friend={friend} />}
    </div>
  )
}

export default FriendBox;