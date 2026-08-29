class LoginPage {
    selectorList () {
        const selectors = {
            usernameField: '[name="username"]',
            passwordField: '[name="password"]',
            loginButton: '.oxd-button',
            wrongCredentialAlert: '.oxd-alert',
        }
    }
    
    acessLoginPage() {
        cy.visit('/auth/login')
    }


    loginWithUser(username, password) {
        cy.get(this.selectorsList.usernameField).type(userData.userSucess.username)
        cy.get(this.selectorsList.passwordField).type(userData.userSucess.password)
        cy.get(this.selectorsList.loginButton).click()
    }
}

export default LoginPage