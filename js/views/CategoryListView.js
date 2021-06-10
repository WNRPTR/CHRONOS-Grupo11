import UserController from '../controllers/UserController.js'
import CategoryController from '../controllers/CategoryController.js'

export default class CategoryListView {
    constructor() {
        this.userController = new UserController();
        this.categoryController = new CategoryController();

        //function to get activities ID's
        this.categoryListname = document.querySelector('#categoryListname');
        this.addCategoryProduct = document.querySelector('#addCategoryProduct');
        this.categoryKitchen = document.querySelector('#categoryKitchen');
        this.categorySport = document.querySelector('#categorySport');
        this.categoryBook = document.querySelector('#categoryBook');
        this.categoryListTarget = document.getElementsByClassName('categoryListTarget');
        this.fillCategoryList();

    }

    fillCategoryList(){
        for (const categoryListTarget of this.categoryListTarget) {
            categoryListTarget.addEventListener('click', event => {
                this.CategoryController.setCurrentCategory(event,target.id);
                location.href = '../html/categoryList.html';
            })
        }
        
    }
}