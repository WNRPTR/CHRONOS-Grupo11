import TrophyModel from '../models/TrophyModel.js'

export default class TrophyController {

    constructor() {
        this.trophies = localStorage.trophies ? JSON.parse(localStorage.trophies) : []
    }

    addTrophy(name, trophyType, text, points) {
        this.trophies.push(new TrophyModel(name, trophyType, text, points));
    }
}