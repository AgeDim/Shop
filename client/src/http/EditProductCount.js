import {$host} from "../axiosAPI";

export const getSoS = async (index, setData) => {
    const {data} = await $host.get('/' + index.toLowerCase())
    setData(data);
}

export const getProductFromSos = async (index, id, setProduct) => {
    const {data} = await $host.get('/product/' + index.toLowerCase() + '/' + id)
    setProduct(data)
}

export const setNewAmount = async (place, placeId, productId, amount) => {
    const {data} = await $host.post('/product/update/' + place.toLowerCase(), {placeId, productId, amount})
    return data
}