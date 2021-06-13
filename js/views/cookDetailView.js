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

        //info to add a comment
        this.newComment = document.querySelector('#newComment')
        this.applyComment = document.querySelector('#applyComment')
        if (this.applyComment) {
            this.createComment();
        }

    }

    fillInfo() {

        const currentProduct = this.categoryController.getCurrentProduct()
        const productInfo = this.categoryController.getProductInfo(currentProduct)

        this.insertKitchenProductName.innerHTML = `${productInfo.name}`
        for (let index in productInfo.ingridients) {
            let item = productInfo.ingridients[index].split(';');
            this.insertIngridients.innerHTML += `<tr>
                <td>${item[0]}</td>
                <td>${item[1]}</td>
            </tr>`
        }

        this.insertPreparation.innerHTML = `${productInfo.description}`

        for (let index in productInfo.comments) {
            this.insertComment.innerHTML += `<p>${productInfo.comments[index]}</p><hr>`
        }

        this.insertKitchenProductLink.innerHTML = `<iframe class="embed-responsive-item" src=${productInfo.videoLink}
        title="YouTube video" allowfullscreen></iframe>`
        
    }

    createComment() {
        this.applyComment.addEventListener('click', () => {
            this.categoryController.addComment(this.newComment.value);
        })
    }


}