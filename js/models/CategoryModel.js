export default class CategoryModel {
    constructor(name, type, description, videoLink, themes, ingridients, duration, storeLink, likes, comments) {
        this.name = name
        this.type = type
        this.description = description
        this.videoLink = videoLink
        this.themes = themes
        this.ingridients = ingridients
        this.duration = duration
        this.storeLink = storeLink
        this.likes = likes
        this.comments = comments
    }
}