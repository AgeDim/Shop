import {makeAutoObservable} from "mobx";

export default class OrderStore {
    constructor() {
        this._userEmail = ""
        this._orders = [{id: 1, time: "23.11.2022", products: [{id:1, amount: 3}, {id:3, amount: 4}]}]
        makeAutoObservable(this)
    }

    get userEmail() {
        return this._userEmail;
    }

    setUserEmail(value) {
        this._userEmail = value;
    }

    setOrders(orders) {
        this._orders = orders
    }

    addOrders(orders) {
        this._orders.push(orders)
    }

    get orders() {
        return this._orders
    }
}