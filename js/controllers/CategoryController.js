import CategoryModel from '../models/CategoryModel.js'

export default class CategoryController {

    constructor() {
        this.categorys = localStorage.categorys ? JSON.parse(localStorage.categorys) : []
        this.currentCategory = sessionStorage.category ? sessionStorage.category : null
    }



    addProduct(name, categoryType, description, videoLink, themes, ingridients, duration, storeLink, likes, comments) {
        this.categorys.push(new CategoryModel(name, categoryType, description, videoLink, themes, ingridients, duration, storeLink, likes, comments));
        localStorage.setItem('categorys', JSON.stringify(this.categorys));
        location.reload();
    }


    getCategoryData() {
        const categoryList = this.categorys
        return categoryList
    }


    setCurrentCategory(name) {
        this.currentCategory = name
        sessionStorage.setItem("category", name);
    }



    getCurrentCategory() {
        return category = sessionStorage.getItem('category')
    }
}
