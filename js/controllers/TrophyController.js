import TrophyModel from '../models/TrophyModel'

export default class TrophyController {

    constructor() {
        this.trophies = localStorage.trophies ? JSON.parse(localStorage.trophies) : []
    }
}