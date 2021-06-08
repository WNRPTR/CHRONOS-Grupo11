import ProfileController from '../controllers/UserController.js'

export default class ProfileView {
    constructor() {
        this.ProfileController = new ProfileController();

        // Password change DOM
        this.oldPassword = document.querySelector('#oldPassword');
        this.newPassword = document.querySelector('#newPassword');
        this.confirmNewPassword = document.querySelector('#confirmNewPassword');
        this.btnNewPass = document.querySelector('#btnNewPass');
        this.logoutButton = document.querySelector('btnLogout');
        this.changePasswordForm();

    }
    changePasswordForm() {
        this.btnNewPass.addEventListener('click', () => {
            try {
                if (this.newPassword.value !== this.confirmNewPassord.value) {
                    throw Error('A palavra pass nova não corresponde a sua confirmação!');
                }
                this.userController.changePassword(this.newPassword.value);
                this.displayMessage('Palavra pass alterada com sucesso !', 'success');

            } catch (e) {
                this.displayMessage(e, 'danger');
                console.log(e)
                console.log(this.newPassword.value)
                console.log(this.confirmNewPassword.value)
                console.log(this.newPassword.value !== this.confirmNewPassord.value)
            }
        });
    }

    displayMessage(message, type) {
        this.messages =
            alert(`${type}, ${message}`);
    }


    this.logoutButton.addEventListener('click', () => {
        this.userController.logout();
        //this.updateButtons('logout');
        location.reload()
        location.href = ('../index.html')
    })
}