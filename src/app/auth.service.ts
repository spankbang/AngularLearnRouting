export class AuthSerive {
    loggedIn = false
    login() {
        this.loggedIn = true
    }
    logout() {
        this.loggedIn = false
    }

    isAuthenticated() {
        const primie = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn)
                },900)
            }
        )
        return primie
    }

}