import TrophyModel from '../models/TrophyModel.js'

export default class TrophyController {

    constructor() {
        this.trophies = localStorage.trophies ? JSON.parse(localStorage.trophies) : []
    }

    addTrophy(name, trophyType, text, points) {
        this.trophies.push(new TrophyModel(name, trophyType, text, points));
        localStorage.setItem('trophies', JSON.stringify(this.trophies));
        location.reload();
    }

    getTrophyData() {
        const trophyList = this.trophies
        return trophyList
    }
}