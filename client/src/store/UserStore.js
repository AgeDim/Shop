import {makeAutoObservable} from "mobx";
import axios from "../axiosAPI";
import {SHOP_ROUTE} from "../utils/const";
import {sha512} from "crypto-hash";
import {getSalt} from "../Salt";
import validator from "validator/es";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._isAdmin = false
        this._isModer = false
        this._user = {username: '', email: '', password: ''}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setIsAdmin(bool) {
        this._isAdmin = bool
    }

    setIsModer(bool) {
        this._isModer = bool
    }

    setUser(user) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }

    get isModer() {
        return this._isModer
    }

    get isAdmin() {
        return this._isAdmin
    }

    get user() {
        return this._user
    }
}
