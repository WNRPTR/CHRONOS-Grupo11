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

        //function to add points
        this.addSportsPoints();

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

        this.insertSportProductName.innerHTML = `${productInfo.name}`
        this.insertSportProductLink.innerHTML = `<iframe class="embed-responsive-item" src=${productInfo.videoLink}
        title="YouTube video" allowfullscreen></iframe>`
        this.insertDescription.innerHTML = `${productInfo.description}`
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

    addSportsPoints() {
        const user = sessionStorage.getItem('loggedUser')
        this.userController.addSportPoints(user)
    }

}