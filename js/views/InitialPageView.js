import UserController from '../controllers/UserController.js'
import CategoryController from '../controllers/CategoryController.js'

export default class InitialPageView {
    constructor() {
        this.userController = new UserController();
        this.categoryController = new CategoryController();

        //function to get activities ID's
        this.addKitchenProduct = document.querySelector('#addKitchenProduct');
        this.addSportProduct = document.querySelector('#addSportProduct');
        this.addBookProduct = document.querySelector('#addBookProduct');
        this.fillTopList();

    }

    fillTopList() {

        const categoryList = this.categoryController.getCategoryData();

        const kitchenCards = []
        const sportCards = []
        const bookCards = []

        for (let category in categoryList) {
            if (categoryList[category].categoryType == 'kitchen') {
                kitchenCards.push(categoryList[category])

            } else if (categoryList[category].categoryType == 'sport') {
                sportCards.push(categoryList[category])

            } else {
                bookCards.push(categoryList[category])

            }
        }

        for (let index = 0; index < 4; index++) {
            this.addKitchenProduct.innerHTML += `<div class="col md-4">
                <div class="card text-center">
                    <center>
                        <img src="../img/food.jpg" class="card-img-top d-block img-fluid max-width: 100%" alt="..."
                            style="height: 10rem">
                    </center>
                    <div class="card-body ">
                        <h5 class="card-title">${kitchenCards[index].name}</h5>
                        <button type="button" class="btn btn-primary ">VER MAIS</button>
                        <button type="button" class="btn btn-danger "> X </button>
                    </div>
                </div>
            </div>`

            this.addSportProduct.innerHTML += `<div class="col md-4">
                <div class="card text-center">
                    <center>
                        <img src="../img/sport.jpg" class="card-img-top d-block img-fluid max-width: 100%" alt="..."
                            style="height: 10rem">
                    </center>
                    <div class="card-body ">
                        <h5 class="card-title">${sportCards[index].name}</h5>
                        <button type="button" class="btn btn-primary ">VER MAIS</button>
                        <button type="button" class="btn btn-danger "> X </button>
                    </div>
                </div>
            </div>`
            this.addBookProduct.innerHTML += `<div class="col md-4">
                <div class="card text-center">
                    <center>
                        <img src="../img/book.jpg" class="card-img-top d-block img-fluid max-width: 100%" alt="..."
                            style="height: 10rem">
                    </center>
                    <div class="card-body ">
                        <h5 class="card-title">${bookCards[index].name}</h5>
                        <button type="button" class="btn btn-primary ">VER MAIS</button>
                        <button type="button" class="btn btn-danger "> X </button>
                    </div>
                </div>
            </div>`
        }
    }



}