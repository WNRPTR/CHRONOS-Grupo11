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
        const ITEMSMAX = 4
        for (let category in categoryList) {
            if (categoryList[category].categoryType == 'kitchen') {
                kitchenCards.push(categoryList[category])

            } else if (categoryList[category].categoryType == 'sport') {
                sportCards.push(categoryList[category])

            } else {
                bookCards.push(categoryList[category])
            }
        }
        const kmax = kitchenCards.length > ITEMSMAX - 1 ? ITEMSMAX : kitchenCards.length;
        const smax = sportCards.length > ITEMSMAX - 1 ? ITEMSMAX : sportCards.length;
        const bmax = bookCards.length > ITEMSMAX - 1 ? ITEMSMAX : bookCards.length;

        for (let index = 0; index < kmax; index++) {
            let kitchenResult = `<div class="col md-4">
                <div class="card text-center">
                    <center>
                        <img src="../img/food.jpg" class="card-img-top d-block img-fluid max-width: 100%" alt="..."
                            style="height: 10rem">
                    </center>
                    <div class="card-body ">
                        <h5 class="card-title">${kitchenCards[index].name}</h5>
                        <button type="button" class="btn btn-primary btnProductDetail" id = "${kitchenCards[index].name}" data-type="kitchen">VER MAIS</button>`
            if (this.userController.isAdmin()) {
                kitchenResult += `<button type="button" class="btn btn-danger btnRemoveProduct" id = "${kitchenCards[index].name}"> X </button>`
            }
            kitchenResult += `</div>
                </div>
            </div>`
            this.addKitchenProduct.innerHTML += kitchenResult
        }
        for (let index = 0; index < smax; index++) {
            let sportResult = `<div class="col md-4">
                <div class="card text-center">
                    <center>
                        <img src="../img/sport.jpg" class="card-img-top d-block img-fluid max-width: 100%" alt="..."
                            style="height: 10rem">
                    </center>
                    <div class="card-body ">
                        <h5 class="card-title">${sportCards[index].name}</h5>
                        <button type="button" class="btn btn-primary btnProductDetail" id = "${sportCards[index].name}" data-type="sport">VER MAIS</button>`
            if (this.userController.isAdmin()) {
                sportResult += `<button type="button" class="btn btn-danger btnRemoveProduct" id = "${sportCards[index].name}"> X </button>`
            }
            sportResult += `</div>
                </div>
            </div>`
            this.addSportProduct.innerHTML += sportResult
        }
        for (let index = 0; index < bmax; index++) {
            let bookResult = `<div class="col md-4">
                <div class="card text-center">
                    <center>
                        <img src="../img/book.jpg" class="card-img-top d-block img-fluid max-width: 100%" alt="..."
                            style="height: 10rem">
                    </center>
                    <div class="card-body ">
                        <h5 class="card-title">${bookCards[index].name}</h5>
                        <button type="button" class="btn btn-primary btnProductDetail" id = "${bookCards[index].name}" data-type="book">VER MAIS</button>`
            if (this.userController.isAdmin()) {
                bookResult += `<button type="button" class="btn btn-danger btnRemoveProduct" id = "${bookCards[index].name}"> X </button>`
            }
            bookResult += `</div>
                </div>
            </div>`

            this.addBookProduct.innerHTML += bookResult
        }
    }



}