import {makeAutoObservable} from "mobx";

export default class FishStore {
    constructor() {
        this._fish = []
        makeAutoObservable(this)
    }

    get fish() {
        return this._fish
    }

    setFish(fish) {
        this._fish = fish
    }

    addFish(fish) {
        this._fish.push(fish)
    }
}