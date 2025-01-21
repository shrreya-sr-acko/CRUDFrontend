import React, { useEffect, useState } from 'react'
import { deleteFamilyById, getFamilyMembers, getFamilyById, getUsers, newFamily, updateFamily } from '../../services/api';

const useFamily = () => {

    const [users, setUsers] = useState(null);
    const [family, setFamily] = useState(null);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchUsers = async(userId) => {
            try{
                const data = await getUsers();
                setUsers(data)
            }
            catch(error){
                setError(error);
            }
        }
        fetchUsers();
    },[])

    const getFamily = async(userId) => {
        try{
            const data = await getFamilyMembers(userId);
            setFamily(data)
        }
        catch(error){
            setError(error);
        }
    }

    const addFamily = async(userId, data) => {
        try{ 
            const fam = await newFamily(userId, data);
            setFamily((prev) => [...prev, fam])
        }catch(error){
            setError(error)
        }
    }

    const editFamily = async(userId, id, data) => {
        try{ 
            await updateFamily(userId, id, data);
            setFamily((prev) =>
                prev.map((fam) => (fam.id == id)? {...fam, ...data} : fam)
            )
        }catch(error){
            setError(error)
        }
    }
    const deleteFamily = async(userId, id) => {
        try{ 
            await deleteFamilyById(userId, id);
            setFamily((prev) => prev.filter((fam) => fam.id != id))
        }catch(error){
            setError(error)
        }
    }

    return ({
        users,
        family,
        error,
        getFamily,
        addFamily,
        editFamily,
        deleteFamily
})
}

export default useFamily