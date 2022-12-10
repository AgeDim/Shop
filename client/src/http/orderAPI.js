import {$host} from "../axiosAPI";

export const submitOrder = async (email, products, selected) => {
    const shopStr = 'Магазин № '
    const storageStr = 'Склад № '
    const productsId = []
    const amounts = []
    products.map(prod => {
        productsId.push(prod.id);
        amounts.push(prod.amount)
    })
    let storageId = null
    let shopId = null
    if (selected.currentKey.includes(shopStr)) {
        shopId = selected.currentKey.slice(selected.currentKey.length - 1, selected.currentKey.length)
        shopId = parseInt(shopId)
    }
    if (selected.currentKey.includes(storageStr)) {
        storageId = selected.currentKey.slice(selected.currentKey.length - 1, selected.currentKey.length)
        storageId = parseInt(storageId)
    }
    const {data} = await $host.post('/order/submit', {email, productsId, amounts, shopId, storageId})
    return data
}
export const getOrders = async (userEmail, setOrders) => {
    const {data} = await $host.get('/order/' + userEmail)
    setOrders(data)
}

export const setStatus = async (orderId, stat) => {
    const map = new Map();
    map.set('inProcess', 1)
    map.set('done', 2)
    map.set('fail', 3)
    const status = map.get(stat.currentKey)
    orderId = parseInt(orderId)
    const {data} = await $host.post("/order/update/status", {orderId, status})
    return data
}