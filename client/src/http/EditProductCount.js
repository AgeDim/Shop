import {$host} from "../axiosAPI";

export const getSoS = async (index) => {
    const {data} = await $host.get('/getSos/'+ index)
    return data
}

export const getProductFromSos = async (index, id) => {
    const {data} = await $host.get('/getProductFromSos/'+index+'/'+id)
    return data
}

export const setNewAmount = async (product) => {
    const {data} = await $host.post('/setAmount', {product})
    return data
}