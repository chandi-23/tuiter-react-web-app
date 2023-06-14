import axios from "axios";
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const USERS_URL = `${SERVER_API_URL}/users`;

//console.log("SERVER_API_URL", SERVER_API_URL)
//console.log("from environment",USERS_URL)

const api = axios.create({ withCredentials: true });


export const login = async ({ username, password }) => {
    //console.log(`${USERS_URL}/login`, username,password)
 const response = await api.post(`${USERS_URL}/login`, { username, password });
 const user = response.data;
 return user;
};

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
   };

export const profile = async () => {
    const response = await api.post(`${USERS_URL}/profile`);
    return response.data;
   };

export const updateUser = async (user) => {
    //console.log("in update thunk")
    //console.log("The user details is :", user)
    //console.log("The userID is :", `${user._id}`)
    //console.log(`${USERS_URL}`)
    //console.log(user)
    const response = await api.put(`${USERS_URL}`, user);
    //console.log("response from the update user", response.data)
    return response.data;
   };

export const register = async ({ firstname, lastname, username, password }) => {
    const response = await api.post(`${USERS_URL}/register`, { firstname, lastname, username, password });
    const user = response.data;
    return user;
   };