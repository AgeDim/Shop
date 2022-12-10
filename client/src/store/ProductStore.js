import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._types = [{id: 0, name: 'Топ'}, {id: 11, name: 'Удилища'}, {id: 4, name: 'Катушки'}, {
            id: 6, name: 'Леска'
        }, {id: 8, name: 'Крючки'}, {id: 2, name: 'Приманки'}, {id: 10, name: 'Наживка'}, {
            id: 9, name: 'Поводки'
        }, {id: 12, name: 'Грузила'}, {id: 5, name: 'Кормушки'}, {id: 13, name: 'Сборки'}, {
            id: 14, name: 'Прикормка'
        }, {id: 3, name: 'База'}, {id: 1, name: 'Добавки'}, {id: 7, name: 'Ароматизаторы'}]
        this._selectedType = {id: 0, name: "Топ"}
        this._products = []
        this._allProd = []
        makeAutoObservable(this)
    }

    setProduct(products) {
        this._products = products
    }

    setAllProduct(products) {
        this._allProd = products
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

    get allProd() {
        return this._allProd
    }

}