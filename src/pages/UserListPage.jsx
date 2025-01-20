import React from 'react'
import { useState } from 'react'

import UserListCard from '../components/user/UserListCard'
import UserDetailsCard from '../components/user/UserDetailsCard'
import NewUser from '../components/forms/NewUser'
import FilterUsers from '../components/filter/FilterUsers'

import useUsers from '../components/hooks/useUsers'
import { getUserById } from '../services/api'


const UserListPage = () => {

  const {user, error, addUser, editUser, deleteUser,filterByStatus} = useUsers();
  const [userCard, setUserCard] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);
  const [userCardDetails, setUserCardDetails] = useState(null);
  


  const handleUserCard = (id, img) =>{
    if(!userCard){
      getUserById(id).then((res) => {setUserCardDetails({...res, img}); setUserCard(true)}).catch((error) => console.log(error));
    }
    else{
      setUserCard(false);
    }
  }

  return (
    <div>
      <div className="flex">
        <h1>User Details</h1>
        <button className='roundButton flex add' onClick={()=>{setShowAddUser(true)}} > Create New</button>
      </div>

      <FilterUsers onFilter = {filterByStatus} />

      { user && user.length > 0 ? (
        <div className="grid">
        {
          user.map(user => {
            return <UserListCard key={user.id}  user={user} handleCard={handleUserCard} />
          })
        }
        </div>
        ) : ( 
        <p>No details</p>
      )}

      {showAddUser && <NewUser onAdd={addUser} onClose={()=> setShowAddUser(false)}/>}

      {userCard && <UserDetailsCard  user={userCardDetails} onClose={handleUserCard} onDelete={deleteUser} onEdit={editUser}/>}
      
    </div>


  )
}

export default UserListPage;
