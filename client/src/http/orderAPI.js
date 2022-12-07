import {$host} from "../axiosAPI";

export const submitOrder = async (userEmail, products) => {
    console.log(userEmail)
    const {data} = await $host.post('/order/submit', {userEmail, products})
    return data
}
export const getOrders = async (userEmail) => {
    const {data} = await $host.get('/order/'+ userEmail)
    return data
}