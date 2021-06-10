import UserController from '../controllers/UserController.js'
import CategoryController from '../controllers/CategoryController.js'

export default class InicialPageView {
    constructor() {
        this.userController = new UserController();
        this.categoryController = new CategoryController();


    }
}