import UserController from '../controllers/UserController.js'
import TrophyController from '../controllers/TrophyController.js'

export default class ProfileView {
    constructor() {
        this.userController = new UserController();
        this.trophyController = new TrophyController();


        // Password change DOM
        this.oldPassword = document.querySelector('#oldPassword');
        this.newPassword = document.querySelector('#newPassword');
        this.confirmNewPassword = document.querySelector('#confirmNewPassword');
        this.btnNewPass = document.querySelector('#btnNewPass');
        this.logoutButton = document.querySelector('btnLogout');
        this.changePasswordForm();

        //user points data for up info
        this.pointsKitchen = document.querySelector('#pointsKitchen');
        this.pointsSport = document.querySelector('#pointsSport');
        this.pointsBook = document.querySelector('#pointsBook');

        //User data for info table
        this.insertName = document.querySelector('#insertName');
        this.insertTotalPoints = document.querySelector('#insertTotalPoints');
        this.insertRecipeNumber = document.querySelector('#insertRecipeNumber');
        this.insertSportNumber = document.querySelector('#insertSportNumber');
        this.insertBookNumber = document.querySelector('#insertBookNumber');
        this.completeForm();

    }


    changePasswordForm() {
        this.btnNewPass.addEventListener('click', () => {
            try {
                if (this.newPassword.value !== this.confirmNewPassword.value) {
                    throw Error('A palavra pass nova não corresponde a sua confirmação!');
                }
                this.userController.changePassword(this.newPassword.value);
                this.displayMessage('Palavra pass alterada com sucesso !', 'success');

            } catch (e) {
                this.displayMessage(e, 'danger');
            }
        });
    }

    displayMessage(message, type) {
        this.messages =
            alert(`${type}, ${message}`);
    }

    completeForm() {
        const currentUser = this.userController.getUserData()
        this.insertName.innerHTML = currentUser.username
        this.pointsKitchen.innerHTML += currentUser.kitchenPoints
        this.pointsSport.innerHTML += currentUser.sportPoints
        this.pointsBook.innerHTML += currentUser.bookPoints
        this.insertTotalPoints.innerHTML = currentUser.kitchenPoints + currentUser.sportPoints + currentUser.bookPoints
        this.insertRecipeNumber.innerHTML = currentUser.kitchenPoints / 5
        this.insertBookNumber.innerHTML = currentUser.sportPoints / 5
        this.insertSportNumber.innerHTML = currentUser.bookPoints / 5
    }

}