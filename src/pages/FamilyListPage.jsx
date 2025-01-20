import React, { useEffect, useState } from 'react'
import axios from 'axios';

import FamilyListCard from '../components/family/FamilyListCard';
import NewFamily from '../components/forms/NewFamily';
import useFamily from '../components/hooks/useFamily';

const FamilyListPage = () => {

  const {users, family, error, getFamily, addFamily, editFamily, deleteFamily} = useFamily();

  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState(null);
  const [isInvalid, setIsInvalid] = useState(null);
  const [isNew, setIsNew] = useState(false);

  const handleInputChange = () =>{

    let isValid = false;
    const selectedUser = users.find((user) => user.name == userName);
    if(selectedUser){
      setUserName(selectedUser.name);
      setUserId(selectedUser.id);
      getFamily(selectedUser.id);
      setIsInvalid(false)
    }
    else{
      setIsInvalid(true);
      setUserName("");
    }
  }

  return (
    <div className='FamilyListPage'>
      <h1>Family Details</h1>
      <h3>Select user</h3>

      <input type="text" list="users" id="user" value={userName} onChange={(e) => setUserName(e.target.value)}/>

      <datalist id="users">
        {users && users.map((user) => (
          <option key = {user.id} value={user.name}/>
        ))}
      </datalist>

      <button onClick={handleInputChange} >Search</button>

      {isInvalid && <p className='close'><i>Select a valid user name</i></p>}
      {isInvalid == false && <div><button className='roundButton add margin' onClick={()=>setIsNew(true)}> Add Family </button></div>}
      
      <div className="grid">
        {family && (family.length > 0)?
          family.map((fam) => {
            return (
                <FamilyListCard fam={fam} onEdit={editFamily} onDelete={deleteFamily}/>
            );
          }): family != null && !isInvalid && <p><i>No family members found</i></p>
        }
      </div>

      {isNew && <NewFamily onAdd={addFamily} userId={userId} onClose={()=> setIsNew(false)}/>}
        
    </div>
  )
}

export default FamilyListPage