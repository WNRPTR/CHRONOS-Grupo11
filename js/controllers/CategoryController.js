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
        console.log(categoryList)
        return categoryList
    }


    setCurrentCategory(name) {
        this.currentCategory = name
        sessionStorage.setItem("category", name);
    }



    getCurrentCategory() {
        return sessionStorage.getItem("category")
    }


    deleteProduct(name) {
        console.log('asdasda')
        this.categorys = this.categorys.filter(category => category.name != name)
        localStorage.setItem('categorys', JSON.stringify(this.categorys));
        location.reload(1000)
    }


    setCurrentProduct(name) {
        this.currentCategory = name
        sessionStorage.setItem("product", name);
    }



    getCurrentProduct() {
        return sessionStorage.getItem("product")
    }



    getCurrentProductType() {
        categoryName = sessionStorage.getItem("product")
        return this.categorys.find(category => category.name = categoryName).categoryType
    }
}
