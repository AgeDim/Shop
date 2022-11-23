import {makeAutoObservable} from "mobx";

export default class BasketStore {
    constructor() {
        this._userEmail = ""
        this._prod =  [{id:2, amount: 3, price: 1500},{id: 5, amount: 4, price: 500},{id: 4, amount: 2, price: 2000},{id: 3, amount: 1, price: 1000}]
        this._genPrice = 0
        makeAutoObservable(this)
    }
    get userEmail() {
        return this._userEmail;
    }

    setUserEmail(value) {
        this._userEmail = value;
    }

    get prod() {
        return this._prod;
    }

    setProdukt(value){
        this._prod = value
    }

    addProducts(value) {
        this._prod.push(value);
    }

    get genPrice() {
        return this._genPrice;
    }

    setGenPrice(value) {
        this._genPrice = value;
    }

    calcGenPrice(){
        let res = 0
        this.prod.map(product => {
            res += product.amount * product.price
        })
        return res
    }

}