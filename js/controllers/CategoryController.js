import TrophyModel from '../models/CategoryModel.js'

export default class CategoryController {

    constructor() {
        this.categorys = localStorage.categorys ? JSON.parse(localStorage.categorys) : []
    }



    addProduct(name, CategoryType, description, videoLink, themes, ingridients, duration, storeLink, likes, comments) {
        this.trophies.push(new TrophyModel(name, trophyType, text, points));
        localStorage.setItem('trophies', JSON.stringify(this.trophies));
        location.reload();
    }
}
