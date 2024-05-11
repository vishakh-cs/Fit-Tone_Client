import Axios from 'axios';


const baseURL = import.meta.env.VITE_SERVER_URL;
const API = Axios.create({
    baseURL,
})

export const UserSignup = async (data) => API.post("/User/signup", data);
export const UserLogin = async (data) => API.post("/User/login", data)


export const addWorkout = async (token, data) =>
    await API.post(`/user/workout`, data, {
        headers: { Authorization: `Bearer ${token}` },
    });


export const getWorkouts = async (token, date) =>
    await API.get(`/user/workout${date}`, {
        headers: { Authorization: `Bearer ${token}` },
    });


export const fetchAllWorkouts = async (token, date) =>
    await API.get(`user/allworkouts`, {
        headers: { Authorization: `bearer ${token}` },
    });