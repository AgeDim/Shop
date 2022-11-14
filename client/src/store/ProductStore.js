import React from 'react';
import {createSlice} from "@reduxjs/toolkit";
import axios from "../axiosAPI";

const initialState = {
    types: [{id: 1, name: 'Удилища'}, {id: 2, name: 'Катушки'}, {id: 3, name: 'Леска'}, {id: 4, name: 'Крючки'}, {
        id: 5, name: 'Приманки'
    }, {id: 6, name: 'Наживка'}, {id: 7, name: 'Поводки'}, {id: 8, name: 'Грузила'}, {id: 9, name: 'Кормушки'}, {
        id: 10, name: 'Сборки'
    }, {id: 11, name: 'Прикормка'}, {id: 12, name: 'База'}, {id: 13, name: 'Добавки'}, {id: 14, name: 'Ароматизаторы'}],
    name: "",
    selectedType: [{id: 1, name: 'Удилища'}],
    products: [{
        id: 1,
        type: 'Удилища',
        name: 'Fortuna Carp',
        rating: '5',
        price: 1500,
        description: "Серия максимально надежных маховых удилищ для ловли в очень широком спектре условий ловли. Удилища данной серии разработаны специально для ловли крупной рыбы в береговой зоне, поэтому их длина ограничивается шестью метрами."
    }, {id: 3, type: 'Леска', name: 'Мишин хуй', rating: 'маловат', price: 1500, description: "", href: ""}, {
        id: 2,
        type: 'Катушки',
        name: 'Самая быстрая рука',
        rating: 'Крутит шо пиздец',
        price: 1500,
        description: "",
        href: ""
    }, {
        id: 4,
        type: 'Катушки',
        name: 'Самая быстрая рука',
        rating: 'Крутит шо пиздец',
        price: 1500,
        description: "",
        href: ""
    }, {
        id: 5,
        type: 'Катушки',
        name: 'Самая быстрая рука',
        rating: 'Крутит шо пиздец',
        price: 1500,
        description: "",
        href: ""
    }]
}
export function getProducts(){
    axios.post("/product").then(res =>{
        if(res.status === 200){
            console.log(res)
            console.log("done /product")
        }
    }).catch((e) => {
        console.log(e)
        console.log("error with post /product")
    })
}

export function setSelectedType(selected) {
    if (!initialState.selectedType.includes(selected)) {
        initialState.selectedType = [...initialState.selectedType, selected];
    } else {
        initialState.selectedType.filter(type => type !== selected)
    }
    console.log(initialState.selectedType)
}

const productStore = createSlice({
    name: 'products', initialState, reducers: {}
})

export default productStore.reducer;