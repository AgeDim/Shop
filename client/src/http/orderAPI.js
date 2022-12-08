import {$host} from "../axiosAPI";

export const submitOrder = async (email, products, selected) => {
    const shopStr = 'Магазин № '
    const storageStr = 'Склад № '
    const productsId=[]
    const amounts=[]
    products.map(prod => {productsId.push(prod.id);amounts.push(prod.amount)})
    let storage = null
    let shop = null
    if(selected.currentKey.includes(shopStr)){
        shop = selected.currentKey.slice(selected.currentKey.length-1,selected.currentKey.length)
    }
    if(selected.currentKey.includes(storageStr)){
        storage = selected.currentKey.slice(selected.currentKey.length-1,selected.currentKey.length)
    }
    const {data} = await $host.post('/order/submit', {email, productsId, amounts, shop, storage})
    return data
}
export const getOrders = async (userEmail) => {
    const {data} = await $host.get('/order/'+ userEmail)
    return data
}