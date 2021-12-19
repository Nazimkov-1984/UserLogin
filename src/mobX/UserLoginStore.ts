import {makeObservable, observable, computed, action} from "mobx"

interface IUserStore {
    userEmail: string;
    userPassword: string;
}

class UserLoginStore {
    userData: IUserStore = {
        userEmail: "",
        userPassword: ""
    }

    constructor(userData: IUserStore) {
        makeObservable(this, {
            userData: observable,
            getUserEmail: computed,
            getUserPassword: computed,
            checkedValidEmail: computed,
            setUserEmail: action,
            setUserPassword: action
        })
        this.userData = userData
    }

    get getUserEmail() {
        return this.userData.userEmail;
    }

    get getUserPassword() {
        return this.userData.userPassword
    }

    get checkedValidEmail() {
        const reg = /^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$/;
        return reg.test(this.userData.userEmail);
    }

    get checkedValidPassword() {
        return this.userData.userPassword !== ""
    }

    set setUserEmail(email: string) {
        this.userData.userEmail = email;
    }

    set setUserPassword(password: string) {
        this.userData.userPassword = password;
    }
}

export default UserLoginStore;

