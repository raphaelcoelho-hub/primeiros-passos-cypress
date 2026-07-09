class LoginPage{

    selectorsList() {
       const selectors = {
           usernameField: "[name='username']",
           passwordField: "[name='password']",
           loginButton: "[type='submit']",
           wrongCredentialAlert: "[role='alert']",
       }

       return selectors
    }

    accessLoginPage() {
        cy.visit('/auth/login', { timeout: 15000 })
    }

        loginWithUsernameAndPassword(username, password) {
            cy.get(this.selectorsList().usernameField, { timeout: 10000 }).should('be.visible').type(username)
            cy.get(this.selectorsList().passwordField).should('be.visible').type(password)
            cy.get(this.selectorsList().loginButton).click()
        }

        checkAccessInvalid() {
        cy.get(this.selectorsList().wrongCredentialAlert).should('be.visible') 
    }

}
export default LoginPage