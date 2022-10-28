import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Удилища'},
            {id: 2, name: 'Катушки'},
            {id: 3, name: 'Леска'},
            {id: 4, name: 'Крючки'},
            {id: 5, name: 'Приманки'},
            {id: 6, name: 'Наживка'},
            {id: 7, name: 'Поводки'},
            {id: 8, name: 'Грузила'},
            {id: 9, name: 'Кормушки'},
            {id: 10, name: 'Сборки'},
            {id: 11, name: 'Прикормка'},
            {id: 12, name: 'База'},
            {id: 13, name: 'Добавки'},
            {id: 14, name: 'Ароматизаторы'}
        ]
        this._selectedType = {}
        this._products = [
            {id: 1, type: 'Удилища', name: 'Супер палка', rating: 'Всем похуй'},
            {id: 3, type: 'Леска', name: 'Мишин хуй', rating: 'маловат'},
            {id: 2, type: 'Катушки', name: 'Самая быстрая рука', rating: 'Крутит шо пиздец'}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setProduct(products) {
        this._products = products
    }
    setSelectedType(type){
        this._selectedType = type
    }

    get selectedType(){
        return this._selectedType
    }

    get types() {
        return this._types
    }

    get products() {
        return this._products
    }
}