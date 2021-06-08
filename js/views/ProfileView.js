import UserController from '../controllers/UserController.js'

export default class ProfileView {
    constructor() {
        this.userController = new UserController();

        // Password change DOM
        this.oldPassword = document.getElementById('oldPassword');
        this.newPassword = document.getElementById('newPassword');
        this.confirNewPassword = document.getElementById('confirmNewPassword');
        this.btnNewPass = document.getElementById('btnNewPass');
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
            }
        });
    }

    displayMessage(message, type) {
        this.messages =
            alert(`${type}, ${message}`);
    }
}