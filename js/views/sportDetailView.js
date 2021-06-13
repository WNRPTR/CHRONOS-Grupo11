import CategoryController from '../controllers/CategoryController.js'
import UserController from '../controllers/UserController.js'

export default class SportDetailView {
    constructor() {
        this.categoryController = new CategoryController();
        this.userController = new UserController();

        //Infos to create sports detail page
        this.insertSportProductName = document.querySelector('#insertSportProductName')
        this.insertSportProductLink = document.querySelector('#insertSportProductLink')
        this.insertDescription = document.querySelector('#insertDescription')
        this.insertComment = document.querySelector('#insertComment')
        this.fillInfo();

    }

    fillInfo() {

        const currentProduct = this.categoryController.getCurrentProduct()
        const productInfo = this.categoryController.getProductInfo(currentProduct)

        this.insertSportProductName.innerHTML = `${productInfo.name}`
        this.insertSportProductLink.innerHTML = `<source src="${productInfo.videoLink}" type="video/mp4">`
        this.insertDescription.innerHTML = `${productInfo.description}`
        for (let index in productInfo.comments){
            this.insertComment.innerHTML = `<p>${productInfo.comments[index]}</p><hr>`
        }
        

    }


}