import React, { useContext, useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FriendEditStyles } from './FriendEdit.module.scss';
import Button from '../Button';
import { FriendEditProps } from '../../models/Friend';
import { useNavigate, useParams } from 'react-router';
import { FriendContextType, FriendsContext } from '../../context/friendsContext';


const style = bemCssModules(FriendEditStyles);

const FriendEdit: React.FC<FriendEditProps> = ({ showFormEditFriend, setShowEditFriend, friend }) => {

  const [firstName, setFirstName] = useState<string>(friend.firstName)
  const [lastName, setLastName] = useState<string>(friend.lastName)
  const { updateFriend } = useContext(FriendsContext) as FriendContextType;
/*   const { setNewFirstName, setNewLastName } = useContext(FriendsContext) as FriendContextType; */

  let navigate = useNavigate();

  const closeForm = () => {
    setShowEditFriend(false);
  };

  const handleUpdateFriend = (id: string) => {
     updateFriend(friend.id, firstName, lastName )
     navigate('/friends');
  };

  return (
    <>
      {showFormEditFriend &&
        <div className={style()}>
          <div className={style('modal')}>
            <h1>Edit Name </h1>
            <form className={style('form')} >
              <div className={style('inputBox')}>
                <label htmlFor="firstName" className={style('label')}>First Name: </label>
                <input id="firstName" name="firstName" type="text" value={firstName} className={style('input')} onChange={(e) => setFirstName(e.target.value)} />
                <label htmlFor="lastName" className={style('label')}>Last Name: </label>
                <input id="lastName" name="lastName" type="text" value={lastName} className={style('input')} onChange={(e) => setLastName(e.target.value)} />
              </div>
              <div className={style('buttonBox')}>
                <Button title="Close" onClick={closeForm} />
                <Button title="Save" variant={true} onClick={handleUpdateFriend}  />
              </div>
            </form>
          </div>
        </div>
      }
    </>
  )
}

export default FriendEdit;



