import React from 'react';
import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._types = [{id: 0, name: 'Топ'}, {id: 11, name: 'Удилища'}, {id: 4, name: 'Катушки'}, {
            id: 6,
            name: 'Леска'
        }, {id: 8, name: 'Крючки'}, {
            id: 2, name: 'Приманки'
        }, {id: 10, name: 'Наживка'}, {id: 9, name: 'Поводки'}, {id: 12, name: 'Грузила'}, {id: 5, name: 'Кормушки'}, {
            id: 13, name: 'Сборки'
        }, {id: 14, name: 'Прикормка'}, {id: 3, name: 'База'}, {id: 1, name: 'Добавки'}, {id: 7, name: 'Ароматизаторы'}]
        this._selectedType = {id:0,name:"Топ"}
        this._products = [{
            id: 1,
            type: 'Удилища',
            name: 'Fortuna Carp',
            rating: '5',
            price: 1500,
            description: "Серия максимально надежных маховых удилищ для ловли в очень широком спектре условий ловли. Удилища данной серии разработаны специально для ловли крупной рыбы в береговой зоне, поэтому их длина ограничивается шестью метрами."
        }, {id: 3, type: 'Леска', name: 'Мишин хуй', rating: 'маловат', price: 1500, description: "asdfghj", href: ""}, {
            id: 2,
            type: 'Катушки',
            name: 'Самая быстрая рука',
            rating: 'Крутит шо пиздец',
            price: 1500,
            description: "sdfghjk",
            href: ""
        }, {
            id: 4,
            type: 'Катушки',
            name: 'Самая быстрая рука',
            rating: 'Крутит шо пиздец',
            price: 1500,
            description: "zxcvbnm,ljhgf",
            href: ""
        }, {
            id: 5,
            type: 'Катушки',
            name: 'Самая быстрая рука',
            rating: 'Крутит шо пиздец',
            price: 1500,
            description: "sertyuklkmnbvcdfrtgh",
            href: ""
        }, {
            id: 6,
            type: 'Удилища',
            name: 'Fortuna Carp',
            rating: '5',
            price: 1500,
            description: "Серия максимально надежных маховых удилищ для ловли в очень широком спектре условий ловли. Удилища данной серии разработаны специально для ловли крупной рыбы в береговой зоне, поэтому их длина ограничивается шестью метрами."
        }, {
            id: 7,
            type: 'Удилища',
            name: 'Fortuna Carp',
            rating: '5',
            price: 1500,
            description: "Серия максимально надежных маховых удилищ для ловли в очень широком спектре условий ловли. Удилища данной серии разработаны специально для ловли крупной рыбы в береговой зоне, поэтому их длина ограничивается шестью метрами."
        }, {
            id: 8,
            type: 'Удилища',
            name: 'Fortuna Carp',
            rating: '5',
            price: 1500,
            description: "Серия максимально надежных маховых удилищ для ловли в очень широком спектре условий ловли. Удилища данной серии разработаны специально для ловли крупной рыбы в береговой зоне, поэтому их длина ограничивается шестью метрами."
        }, {
            id: 9,
            type: 'Удилища',
            name: 'Fortuna Carp',
            rating: '5',
            price: 1500,
            description: "Серия максимально надежных маховых удилищ для ловли в очень широком спектре условий ловли. Удилища данной серии разработаны специально для ловли крупной рыбы в береговой зоне, поэтому их длина ограничивается шестью метрами."
        }, {
            id: 10,
            type: 'Удилища',
            name: 'Fortuna Carp',
            rating: '5',
            price: 1500,
            description: "Серия максимально надежных маховых удилищ для ловли в очень широком спектре условий ловли. Удилища данной серии разработаны специально для ловли крупной рыбы в береговой зоне, поэтому их длина ограничивается шестью метрами."
        }]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setProduct(products) {
        this._products = products
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    get selectedType() {
        return this._selectedType
    }

    get types() {
        return this._types
    }

    get products() {
        return this._products
    }
}