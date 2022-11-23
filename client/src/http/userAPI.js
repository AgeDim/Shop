import jwt_decode from "jwt-decode";
import axios, {$host} from "../axiosAPI";


export const reg = async (email, password) => {
    const {data} = await $host.post('/reg', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await axios.get('/check/')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const checkModer = async (email) => {
    const {data} = await axios.get('/checkModer/' + email)
    localStorage.setItem('moderRights', data.moderRights)
    return jwt_decode(data.moderRights)
}
export const checkAdmin = async (email) => {
    const {data} = await axios.get('/checkAdmin/' + email)
    localStorage.setItem('adminRights', data.adminRight)
    return jwt_decode(data.adminRight)
}
