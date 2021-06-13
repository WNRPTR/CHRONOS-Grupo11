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

        //info to add a comment
        this.newComment = document.querySelector('#newComment')
        this.applyComment = document.querySelector('#applyComment')
        if (this.applyComment) {
            createComment();
        }

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

    createComment(){
        this.applyComment.addEventListener('click', () => {
            this.categoryController.addComment(this.newComment);
        })

    }


    
}