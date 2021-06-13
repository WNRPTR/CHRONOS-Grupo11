import CategoryController from '../controllers/CategoryController.js'
import UserController from '../controllers/UserController.js'

export default class CookDetailView {
    constructor() {
        this.categoryController = new CategoryController();
        this.userController = new UserController();

        //Infos to create cooking detail page
        this.insertKitchenProductName = document.querySelector('#insertKitchenProductName')
        this.insertKitchenProductLink = document.querySelector('#insertKitchenProductLink')
        this.insertPreparation = document.querySelector('#insertPreparation')
        this.insertIngridients = document.querySelector('#insertIngridients')
        this.insertComment = document.querySelector('#insertComment')
        this.fillInfo();


    }

    fillInfo() {

        const currentProduct = this.categoryController.getCurrentProduct()
        const productInfo = this.categoryController.getProductInfo(currentProduct)

        this.insertSportProductName.innerHTML = `${productInfo.name}`
        this.insertSportProductLink.innerHTML = `<iframe class="embed-responsive-item" src=${productInfo.videoLink}
        title="YouTube video" allowfullscreen></iframe>`
        this.insertDescription.innerHTML = `${productInfo.description}`
        for (let index in productInfo.comments) {
            this.insertComment.innerHTML += `<p>${productInfo.comments[index]}</p><hr>`
        }
    }



}