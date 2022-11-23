import {$host} from "../axiosAPI";

export const submitOrder = (userEmail, products) => {
    const date = Date.now()
    const {data} = $host.post('/submitOrder', {userEmail, products, date})
    return data
}
export const getOrders = (userEmail) => {
    const {data} = $host.get('/orders'+ userEmail)
    return data
}