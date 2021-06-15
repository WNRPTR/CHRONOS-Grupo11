export default class CategoryModel {
    constructor(name, categoryType, description, videoLink, themes, ingridients, duration, storeLink, likes) {
        this.name = name
        this.categoryType = categoryType
        this.description = description
        this.videoLink = videoLink
        this.themes = themes
        this.ingridients = ingridients
        this.duration = duration
        this.storeLink = storeLink
        this.likes = likes
        this.comments = []
    }
}