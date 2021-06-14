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

        //function to add points
        this.addCookPoints();

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

        const ingridients = productInfo.ingridients.split('/')

        this.insertKitchenProductName.innerHTML = `${productInfo.name}`
        for (let index in ingridients) {
            let item = ingridients[index].split(';');
            this.insertIngridients.innerHTML += `<tr>
                <td>${item[0]}</td>
                <td>${item[1]}</td>
            </tr>`
        }

        this.insertPreparation.innerHTML = `${productInfo.description}`

        for (let index in productInfo.comments) {
            const items = productInfo.comments[index].split(';')
            this.insertComment.innerHTML += `<p>${items[0]}:&nbsp;${items[1]}</p><hr>`
        }

        this.insertKitchenProductLink.innerHTML = `<iframe class="embed-responsive-item" src=${productInfo.videoLink}
        title="YouTube video" allowfullscreen></iframe>`

    }

    createComment() {
        this.applyComment.addEventListener('click', () => {
            const currentUser = sessionStorage.getItem('loggedUser')
            this.categoryController.addComment(currentUser, this.newComment.value);
        })
    }

    addCookPoints() {

        const user = sessionStorage.getItem('loggedUser')
        this.userController.addKitchenPoints(user)
    }

}