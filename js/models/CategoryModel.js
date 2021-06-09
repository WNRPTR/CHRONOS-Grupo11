export default class CategoryModel {
    constructor(name, Categorytype, description, videoLink, themes, ingridients, duration, storeLink, likes, comments) {
        this.name = name
        this.Categorytype = Categorytype
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