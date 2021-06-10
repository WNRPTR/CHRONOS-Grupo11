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
        this.categoryListTarguet = document.getElementsByClassName('categoryListTarguet');
        this.fillCategoryList();

    }

    fillCategoryList(){

        
    }
}