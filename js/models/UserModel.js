export default class UserModel {
    constructor(id, username, password, type) {
        this.id = id
        this.username = username
        this.password = password
        this.type = type
        this.kitchenPoints = 0
        this.sportPoints = 0
        this.bookPoints = 0
    }
}