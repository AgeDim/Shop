import jwt_decode from "jwt-decode";
import axios, {$host} from "../axiosAPI";


export const reg = async (email, password) => {
    const {data} = await $host.post('/reg', {email, password})
    localStorage.setItem('token', data)
    return jwt_decode(data)
}

export const login = async (email, password) => {
    const {data} = await $host.post('/login', {email, password})
    localStorage.setItem('token', data)
    return jwt_decode(data)
}

export const check = async (email) => {
    const {data} = await axios.get('/check/' + email)
    localStorage.setItem('token', data)
    return jwt_decode(data)
}

export const checkAdmin = async (email) => {
    const {data} = await axios.get('/checkAdmin/' + email)
    localStorage.setItem('adminRights', data.adminRight)
    return jwt_decode(data.adminRight)
}
export const getFavorite = async (email, setFavorite) => {
    const {data} = await $host.get('/favorite/' + email)
    setFavorite(data)
}
export const setFavorite = async (email, productIds) => {
    const {data} = await $host.post('/favorite/add/', {email, productIds})
    return data
}
