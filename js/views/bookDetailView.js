import CategoryController from '../controllers/CategoryController.js'
import UserController from '../controllers/UserController.js'

export default class BookDetailView {
    constructor() {
        this.categoryController = new CategoryController();
        this.userController = new UserController();

        //Infos to create Book detail page
        this.insertProductTitle = document.querySelector('#insertProductTitle')
        this.insertProductImage = document.querySelector('#insertProductImage')
        this.insertProductStoryDescription = document.querySelector('#insertProductStoryDescription')
        this.insertProductStoreLink = document.querySelector('#insertProductStoreLink')
        this.insertProductStoryThemes = document.querySelector('#insertProductStoryThemes')
        this.insertComment = document.querySelector('#insertComment')
        this.fillInfo();

        //function to add points
        this.addBooksPoints();

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

        const stores = productInfo.storeLink.split('|')

        this.insertProductTitle.innerHTML = `${productInfo.name}`
        this.insertProductImage.innerHTML = `<img src=${productInfo.videoLink} class="figure-img"
            alt="" style="max-height:600px; max-width:500px">`
        this.insertProductStoryDescription.innerHTML = `${productInfo.description}`
        this.insertProductStoryThemes.innerHTML = `${productInfo.themes}`

        for (let index in stores) {
            let item = stores[index].split(';');
            this.insertProductStoreLink.innerHTML += `<a href="${item[1]}"><h6>${item[0]}</h6></a>`
        }


        for (let index in productInfo.comments) {
            const items = productInfo.comments[index].split(';')
            this.insertComment.innerHTML += `<p>${items[0]}:&nbsp;${items[1]}</p><hr>`
        }
    }

    createComment() {
        this.applyComment.addEventListener('click', () => {
            const currentUser = sessionStorage.getItem('loggedUser')
            this.categoryController.addComment(currentUser, this.newComment.value);
        })
    }

    addBooksPoints() {

        const user = sessionStorage.getItem('loggedUser')
        this.userController.addBookPoints(user)
    }

}