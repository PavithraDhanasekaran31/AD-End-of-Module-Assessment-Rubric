class UserController {
    constructor() {
        this.users = [];
    }

    add(user) {
        this.users.push(user);
        return user;
    }

    remove(id) {
        this.users = this.users.filter(u => u.id !== id);
    }

    findByEmail(email) {
        return this.users.filter(u => u.email === email);
    }

    findById(id) {
        return this.users.find(u => u.id === id);
    }
}

module.exports = UserController;
