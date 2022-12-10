import {makeAutoObservable} from "mobx";

export default class FavoriteStore {
    constructor() {
        this._userEmail = ""
        this._prod = []
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

    setFavorite(value) {
        this._prod = value
    }

    addFavorite(value) {
        this._prod.push(value);
    }
}

