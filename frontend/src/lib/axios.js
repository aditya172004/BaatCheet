import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.MODE === "development"? "http://localhost:5001/api": "/api",
    withCredentials:true,
})

