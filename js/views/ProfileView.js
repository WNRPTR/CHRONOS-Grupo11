import UserController from '../controllers/UserController.js'
import TrophyController from '../controllers/TrophyController.js'
import CategoryController from '../controllers/CategoryController.js'

export default class ProfileView {
    constructor() {
        this.userController = new UserController();
        this.trophyController = new TrophyController();
        this.categoryController = new CategoryController();

        //function to unlock trophies
        this.insertTrophies = document.querySelector('#insertTrophies')
        this.confirmTrophy();

        //user list for admin ban
        this.userList = document.querySelector('#userList');
        this.btnBanUser = document.getElementsByClassName('banUser');
        this.banForm();
        if (this.btnBanUser) {
            this.banUser()
        }

        //category data to create a new activity
        this.txtAddProductName = document.querySelector('#txtAddProductName');
        this.sltProductType = document.querySelector('#sltProductType');
        this.txtAddDescription = document.querySelector('#txtAddDescription');
        this.txtAddVideoLink = document.querySelector('#txtAddVideoLink');
        this.txtAddThemes = document.querySelector('#txtAddThemes');
        this.txtAddIngridients = document.querySelector('#txtAddIngridients');
        this.txtAddDuration = document.querySelector('#txtAddDuration');
        this.txtAddStoreLinks = document.querySelector('#txtAddStoreLinks');
        this.btnAddProduct = document.querySelector('#btnAddProduct');
        this.bindProducts();

        //trophies data 
        this.txtAddTrophyName = document.querySelector('#txtAddTrophyName');
        this.sltTrophyType = document.querySelector('#sltTrophyType');
        this.txtAddTrophyText = document.querySelector('#txtAddTrophyText');
        this.txtAddPoints = document.querySelector('#txtAddPoints');
        this.btnAddTrophy = document.querySelector('#btnAddTrophy');
        this.bindTrophies();

        // Password change DOM
        this.oldPassword = document.querySelector('#oldPassword');
        this.newPassword = document.querySelector('#newPassword');
        this.confirmNewPassword = document.querySelector('#confirmNewPassword');
        this.btnNewPass = document.querySelector('#btnNewPass');
        this.logoutButton = document.querySelector('#btnLogout');
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
                if (this.newPassword.value !== this.confirmNewPassword.value || this.userController.isOldPass(this.oldPassword.value) === false) {
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

    bindTrophies() {
        this.btnAddTrophy.addEventListener('click', () => {
            this.trophyController.addTrophy(txtAddTrophyName.value, sltTrophyType.value, txtAddTrophyText.value, txtAddPoints.value)
        })
    }

    bindProducts() {
        this.btnAddProduct.addEventListener('click', () => {
            this.categoryController.addProduct(txtAddProductName.value, sltProductType.value, txtAddDescription.value, txtAddVideoLink.value, txtAddThemes.value, txtAddIngridients.value, txtAddDuration.value, txtAddStoreLinks.value,)
        })
    }

    banForm() {
        const userList = this.userController.getUserNames()
        for (let user in userList) {
            this.userList.innerHTML += ` <hr><div class="col-md-6">${userList[user]}</div>
                                        <div class="col-md-6"><button type="button" class="btn btn-danger banUser" id="${userList[user]}">Banir</button></div>`
        }
    }

    banUser() {
        for (const btnBanUser of this.btnBanUser) {
            btnBanUser.addEventListener('click', event => {
                this.userController.removeUser(event.target.id)
                location.reload(1000)
                this.banForm()
            })
        }
    }

    confirmTrophy() {
        const feedData = this.trophyController.getTrophyData()
        const kitchenTrophies = []
        const sportTrophies = []
        const bookTrophies = []


        for (let category in feedData) {
            if (feedData[category].trophyType == 'kitchen') {
                kitchenTrophies.push(feedData[category])

            } else if (feedData[category].trophyType == 'sport') {
                sportTrophies.push(feedData[category])

            } else {
                bookTrophies.push(feedData[category])

            }

        }



        const userPoints = this.userController.getUserPoints()

        const kitchen = userPoints[0]
        const sport = userPoints[1]
        const book = userPoints[2]


        for (let category in kitchenTrophies) {
            if (kitchen >= kitchenTrophies[category].points) {
                this.insertTrophies.innerHTML += `<div class="col">
                            <div class="card" style="width:8rem; height:8rem">
                            <img src="../img/trophyImg.png" class="card-img-top" alt="...">
                            <div class="card-body text-center">
                                <h5 class="card-title">${kitchenTrophies[category].name}</h5>
                                <p class="card-text">${kitchenTrophies[category].text}</p>
                            </div>
                        </div>
                    </div>`
            }
        }

        for (let category in sportTrophies) {
            if (sport >= sportTrophies[category].points) {
                this.insertTrophies.innerHTML += `<div class="col">
                            <div class="card" style="width:8rem; height:8rem">
                            <img src="../img/trophyImg.png" class="card-img-top" alt="...">
                            <div class="card-body text-center">
                                <h5 class="card-title">${sportTrophies[category].name}</h5>
                                <p class="card-text">${sportTrophies[category].text}</p>
                            </div>
                        </div>
                    </div>`
            }
        }

        for (let category in bookTrophies) {
            if (book >= bookTrophies[category].points) {
                this.insertTrophies.innerHTML += `<div class="col">
                            <div class="card" style="width:8rem; height:8rem">
                            <img src="../img/trophyImg.png" class="card-img-top" alt="...">
                            <div class="card-body text-center">
                                <h5 class="card-title">${bookTrophies[category].name}</h5>
                                <p class="card-text">${bookTrophies[category].text}</p>
                            </div>
                        </div>
                    </div>`
            }
        }

    }
}