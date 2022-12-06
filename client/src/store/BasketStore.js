import {makeAutoObservable} from "mobx";

export default class BasketStore {
    constructor() {
        this._userEmail = ""
        this._prod =  []
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