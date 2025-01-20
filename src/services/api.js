import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type":"application/json"
    }
});

export const getUsers = () => axiosInstance.get('/user').then((res) => res.data);
export const getUserById = (id) => axiosInstance.get(`/user/${id}`).then((res) => res.data);

export const getFamilyMembers = (userId) => axiosInstance.get(`/user/${userId}/family`).then((res) => res.data);
export const getFamilyById = (userId, id) => axiosInstance.get(`/user/${userId}/family/${id}`).then((res) => res.data);

export const newUser = (body) => axiosInstance.post(`/user`,body).then((res) => res.data);
export const newFamily = (userId, body) => axiosInstance.post(`/user/${userId}/family`,body).then((res) => res.data);

export const updateUser = (id, body) => axiosInstance.put(`/user/${id}`,body).then((res) => res.data);
export const updateFamily = (userId, id, body) => axiosInstance.put(`/user/${userId}/family/${id}`,body).then((res) => res.data);


export const deleteUserById = (id) => axiosInstance.delete(`/user/${id}`).then((res) => res.data);
export const deleteFamilyById = (userId, id) => axiosInstance.delete(`/user/${userId}/family/${id}`).then((res) => res.data);

export const getUserByFilter = (status) => axiosInstance.get(`user/filter?status=${status}`).then((res)=> res.data);