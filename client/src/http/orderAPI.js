import {$host} from "../axiosAPI";

export const submitOrder = async (userEmail, products) => {
    const {data} = await $host.post('/submitOrder', {userEmail, products})
    return data
}
export const getOrders = async (userEmail) => {
    const {data} = await $host.get('/orders/'+ userEmail)
    return data
}