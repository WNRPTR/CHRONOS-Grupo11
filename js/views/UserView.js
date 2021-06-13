import UserController from '../controllers/UserController.js'

export default class UserView {
    constructor() {
        this.userController = new UserController();


        // register DOM
        this.registerUsername = document.getElementById('txtRegisterUsername');
        this.registerEmail = document.getElementById('txtRegisterEmail')
        this.registerPassword = document.getElementById('txtRegisterPassword');
        this.registerPassword2 = document.getElementById('txtConfirmRegisterPassword');
        this.registerButton = document.getElementById('btnRegister');
        if (this.registerUsername) {
            this.bindRegisterForm();
        }


        // login/logout DOM
        this.loginUsername = document.getElementById('txtUsername');
        this.loginPassword = document.getElementById('txtPassword');
        this.loginButton = document.getElementById('btnLogin');
        if (this.loginUsername) {
            this.bindLoginForm();
        }

        /* this.fullSite = document.querySelector('#fullSite')
        this.body = document.getElementsByTagName('body')
        if (this.fullSite) {
            this.checkLoginStatus()
        } */

        this.logoutButton = document.getElementById('btnLogout');
        if (this.logoutButton) {
            this.logOutFunction();
        }

        this.addProduct = document.getElementById('addProduct-tab');
        this.addTrophy = document.getElementById('addTrophy-tab');
        this.usersBan = document.getElementById('usersBan-tab');
        if (this.addProduct) {
            this.checkUserType();
        }



        this.messages = document.querySelector('#messages')

    }

    bindRegisterForm() {
        this.registerButton.addEventListener('click', () => {

            try {
                if (this.registerPassword.value !== this.registerPassword2.value) {
                    throw Error('Password and Confirm Password are not equal');
                }
                this.userController.register(this.registerUsername.value, this.registerEmail.value, this.registerPassword.value, 'user');
                this.displayMessage('User registered with success!', 'success');
                location.href = '../html/login.html';
            } catch (e) {
                this.displayMessage(e, 'danger')
                console.log(e)
            }
        });
    }

    bindLoginForm() {
        this.loginButton.addEventListener('click', () => {
            try {
                this.userController.login(this.loginUsername.value, this.loginPassword.value);
                this.displayMessage('User logged in with success!', 'success');
                location.href = ('../html/initialPage.html')
                // Wait 1 second before reloading, so the user can see the login success message
                setTimeout(() => {
                    /* this.updateSite('login'); */
                    location.reload()
                },
                    1000);

            } catch (e) {
                this.displayMessage(e, 'danger');
            }
        });


    }

    logOutFunction() {
        this.logoutButton.addEventListener('click', () => {
            this.userController.logout();
            /* this.updateSite('logout'); */
            location.reload()
            location.href = ('../index.html')
        })
    }

    /* checkLoginStatus() {
        if (this.userController.isLogged()) {
            this.updateSite('login');
        } else {
            this.updateSite('logout');
        }
    } */

    checkUserType() {
        if (this.userController.isAdmin()) {
            this.updateUserSite('admin');
        } else {
            this.updateUserSite('user');
        }
    }

    displayMessage(message, type) {
        this.messages =
            alert(`${type}, ${message}`);
    }

    /* updateSite(event) {
        switch (event) {
            case 'login':
                this.fullSite.style.visibility = 'visible'
                break;
            case 'logout':
                this.fullSite.style.visibility = 'hidden'
                this.body.innerHTML = `<div>
                <h5>Precisa de estar logado para poder usufruir do site</h5>
            </div>`

        }
    } */

    updateUserSite(event) {
        switch (event) {
            case 'admin':
                this.addProduct.style.visibility = 'visible'
                this.addTrophy.style.visibility = 'visible'
                this.usersBan.style.visibility = 'visible'
                break;
            case 'user':
                this.addProduct.style.visibility = 'hidden'
                this.addTrophy.style.visibility = 'hidden'
                this.usersBan.style.visibility = 'hidden'
        }
    }
}