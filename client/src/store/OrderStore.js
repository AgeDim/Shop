import {makeAutoObservable} from "mobx";

export default class OrderStore {
    constructor() {
        this._userEmail = ""
        this._orders = []
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