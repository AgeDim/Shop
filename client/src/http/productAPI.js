import {$host} from "../axiosAPI";
import axios from "axios";

const map = new Map();
map.set('Топ', 'top')
map.set('Удилища', 'rod')
map.set('Катушки', 'coil')
map.set('Леска', 'fishing_line')
map.set('Крючки', 'hook')
map.set('Приманки', 'lure')
map.set('Наживка', 'bait')
map.set('Поводки', 'leash')
map.set('Грузила', 'sinker')
map.set('Кормушки', 'feeder')
map.set('Сборки', 'pack')
map.set('Прикормка', 'feeding_up')
map.set('База', 'base')
map.set('Добавки', 'additive')
map.set('Ароматизаторы', 'flavoring')

export const getProductByType = async (type) => {
    console.log(map.get(type.name))
    const {data} = await $host.get("/product/" + map.get(type.name))
    return data
}
export const createDevice = async (product) => {
    const {data} = await $host.post('/product/add', product)
    return data
}