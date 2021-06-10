import UserController from '../controllers/UserController.js'
import CategoryController from '../controllers/CategoryController.js'

export default class CategoryListView {
    constructor() {
        this.userController = new UserController();
        this.categoryController = new CategoryController();

        //function to get activities ID's
        this.categoryListname = document.querySelector('#categoryListname');
        this.addCategoryProduct = document.querySelector('#addCategoryProduct');
        this.categoryListTarget = document.getElementsByClassName('categoryListTarget');
        this.fillCategoryList();
        if (this.categoryListTarget) {
            this.getTargetList();
        }
    }

    getTargetList(){
        for (const categoryListTarget of this.categoryListTarget) {
            categoryListTarget.addEventListener('click', event => {
                this.CategoryController.setCurrentCategory(event,target.id);
                location.href = '../html/categoryList.html';
            })
        }
    }


    fillCategoryList(){
        
        const typeCategory = this.categoryController.getCurrentCategory();

        const kitchen = "../img/food.jpg"
        const sport = "../img/sport.jpg"
        const book = "../img/book.jpg"

        const getCategoryList = this.categoryController.getCategoryData();
        const productList = []

        for (let category in getCategoryList) {
            if (getCategoryList[category].categoryType == typeCategory) {
                productList.push(getCategoryList[category])

            }
        }

        if (typeCategory == "kitchen") {
            this.categoryListname.innerHTML = `Receitas`

        } else if (typeCategory == "sport") {
            this.categoryListname.innerHTML = `Desporto`

        } else{
            this.categoryListname.innerHTML = `Livros`
        }

        for (let product in productList) {
            let result = `<div class="col md-4">
                <div class="card text-center">
                    <center>
                        <img src="../img/food.jpg" class="card-img-top d-block img-fluid max-width: 100%" alt="..."
                            style="height: 10rem">
                    </center>
                    <div class="card-body ">
                        <h5 class="card-title">${productList[product].name}</h5>
                        <button type="button" class="btn btn-primary " id = "${productList[product].name}">VER MAIS</button>`
            if (this.userController.isAdmin()) {
                result += `<button type="button" class="btn btn-danger" id = "${productList[product].name}"> X </button>`
            }

            result += `</div>
                </div>
            </div>`

            this.addCategoryProduct.innerHTML += result
        }
    }
}