import UserModel from '../models/UserModel.js'

export default class UserController {

    constructor() {
        this.users = localStorage.users ? JSON.parse(localStorage.users) : []
        this.currentUser = sessionStorage.loggedUser ? sessionStorage.loggedUser : null
    }

    register(username, password, type) {
        if (this.users.find(user => user.username === username)) {
            throw Error(`User with username "${username}" already exists!`);
        } else {
            const newId = this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1
            this.users.push(new UserModel(newId, username, password, type));
            localStorage.setItem('users', JSON.stringify(this.users));
        }
    }

    login(username, password) {
        if (this.users.some(user => user.username === username && user.password === password)) {
            sessionStorage.setItem('loggedUser', username);
            return true;
        } else {
            throw Error('Invalid login!');
        }
    }

    logout() {
        sessionStorage.removeItem('loggedUser');
    }

    isLogged() {
        return sessionStorage.getItem('loggedUser') !== null ? true : false;
    }


    isAdmin() {
        const username = sessionStorage.getItem('loggedUser')
        return this.users.find(user => user.username == username).type == 'admin' ? true : false

    }
    getUserData() {
        return this.users.find(user => user.username == this.currentUser)

    }
}





export class ProfileController {
    constructor() {
        this.users = localStorage.users ? JSON.parse(localStorage.users) : []
        this.currentUser = sessionStorage.getItem('loggedUser') ? sessionStorage.getItem('loggedUser') : null
    }

    changePassword(newPassword) {
        const username = sessionStorage.getItem('loggedUser')
        this.users.find(user => user.username == username).password = newPassword
    }

    getUserData() {
        /* result = this.users.find(user => user.username == this.currentUser) */
        let username = 'asdjadkajsdh'
        return username
    }

}