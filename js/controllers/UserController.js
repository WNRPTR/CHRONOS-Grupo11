import UserModel from '../models/UserModel.js'

export default class UserController {

    constructor() {
        this.users = localStorage.users ? JSON.parse(localStorage.users) : []
        this.currentUser = sessionStorage.loggedUser ? sessionStorage.loggedUser : null
    }

    register(username, email, password, type) {
        if (this.users.find(user => user.username === username)) {
            throw Error(`User with username "${username}" already exists!`);
        } else {
            const newId = this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1
            this.users.push(new UserModel(newId, username, email, password, type));
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

    isOldPass(oldPassword) {
        const username = sessionStorage.getItem('loggedUser')
        return this.users.find(user => user.username == username).password == oldPassword ? true : false
    }

    changePassword(newPassword) {
        const username = sessionStorage.getItem('loggedUser')
        this.users.find(user => user.username == username).password = newPassword
        localStorage.setItem('users', JSON.stringify(this.users))
        location.reload(1000)
        console.log(this.users.find(user => user.username == username).password)
    }

    getUserNames() {
        let usernames = []
        for (let user in this.users) {
            if (this.users[user].username !== this.currentUser) {
                usernames.push(this.users[user].username)
            }
        }
        console.log(usernames)

        return usernames
    }


    removeUser(username) {
        this.users = this.users.filter(user => user.username != username)
        localStorage.setItem('users', JSON.stringify(this.users))
        location.reload(1000)
    }



    getUserPoints() {
        const categoryPoints = []
        const kitchen = this.users.find(user => user.username == this.currentUser).kitchenPoints
        const sport = this.users.find(user => user.username == this.currentUser).sportPoints
        const book = this.users.find(user => user.username == this.currentUser).bookPoints
        categoryPoints.push(kitchen)
        categoryPoints.push(sport)
        categoryPoints.push(book)
        return categoryPoints
    }
}