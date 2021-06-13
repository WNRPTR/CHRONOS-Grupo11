import CategoryController from '../controllers/CategoryController.js'
import UserController from '../controllers/UserController.js'

export default class BookDetailView {
    constructor() {
        this.categoryController = new CategoryController();
        this.userController = new UserController();

        //Infos to create Book detail page
        this.insertProductTitle = document.querySelector('#insertProductTitle')
        this.inserProductImage = document.querySelector('#inserProductImage')
        this.insertProductStoryDescription = document.querySelector('#insertProductStoryDescription')
        this.insertProductStoreLink = document.querySelector('#insertProductStoreLink')
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

        this.insertProductTitle.innerHTML = `${productInfo.name}`
        this.inserProductImage.innerHTML = `<img src="${productInfo.videoLink}" class="figure-img"
            alt="" style="height:100%; width: 200%">`
        this.insertProductStoryDescription.innerHTML = `${productInfo.description}`
        
        for (let index in productInfo.comments) {
            this.insertComment.innerHTML += `<p>${productInfo.comments[index]}</p><hr>`
        }
    }






    createComment() {
        this.applyComment.addEventListener('click', () => {
            this.categoryController.addComment(this.newComment.value);
        })
    }

}