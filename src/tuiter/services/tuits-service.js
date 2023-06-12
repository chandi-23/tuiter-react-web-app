import axios from 'axios';
//const TUITS_API = 'http://localhost:4000/api/tuits';
//const TUITS_API = 'https://tuiter-node-server-app-cs1234-sp23.onrender.com/api/tuits';

const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;
console.log("from the boss",TUITS_API)
console.log("from the boss2: ", API_BASE)

export const findTuits = async () => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    console.log(tuits)
    return tuits;
   }

export const deleteTuit = async (tid) => {
    const response = await axios.delete(`${TUITS_API}/${tid}`)
    return response.data
  }

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
   }

export const updateTuit = async (tuit) => {
    const response = await axios
      .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
  }
  
//export const createTuit = async (tuit) => {}
//export const findTuits  = async ()     => {}
//export const deleteTuit = async (tuit) => {}
//export const updateTuit = async (tuit) => {}