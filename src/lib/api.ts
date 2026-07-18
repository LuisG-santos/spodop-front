import axios from "axios";
import { ApiError } from "./errors/api-error";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
})

api.interceptors.response.use((res) => res, (error) => {
    if(axios.isAxiosError(error) && error.response?.data?.message){
        const {message, field, code} = error.response.data;
        return Promise.reject(new ApiError(message, field, code))
    }

    return Promise.reject(new ApiError("Erro inesperado. Tente novamente"))
}) 