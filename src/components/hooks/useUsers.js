import React, { useEffect, useState } from 'react'
import { getUserByFilter, getUsers, newUser, updateUser, deleteUserById } from '../../services/api';

const useUsers = () => {

    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async() =>{
            try{
                const data = await getUsers();
                setUser(data);
            }
            catch(error){
                setError(error);
            }
        }
        fetchUser();
    },[]);

    const filterByStatus = async(status) => {
        try{ 
            const data = status === "ALL"? await getUsers() : await getUserByFilter(status);
            setUser(data)
        }catch(error){
            setError(error)
        }
    }

    const addUser = async(data) => {
        try{ 
            const user = await newUser(data);
            setUser((prev) => [...prev, user])
        }catch(error){
            setError(error)
        }
    }

    const editUser = async(id, data) => {
        try{ 
            const updatedUser = await updateUser(id, data);
            setUser((prev) =>
                prev.map((user) => (user.id == id)? {...user, ...updatedUser} : user)
            )
        }catch(error){
            setError(error)
        }
    }
    const deleteUser = async(id) => {
        try{ 
            await deleteUserById(id);
            setUser((prev) => prev.filter((user) => user.id != id))
        }catch(error){
            setError(error)
        }
    }


    return {
        user,
        error,
        addUser,
        editUser,
        deleteUser,
        filterByStatus
    }
}

export default useUsers;