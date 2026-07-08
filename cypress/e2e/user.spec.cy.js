import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
   
   
   
   
   
  }
         
  it.only('User Info Update - Success', () => {
   loginPage.accessLoginPage()
   loginPage.loginWithUsernameAndPassword(userData.userSuccess.username, userData.userSuccess.password)


    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails('First name', 'Last Name', 'nick Name')
    myInfoPage.fillEmployDetails('Employee Id', 'Other Id')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

  cy.location('pathname').should('contain', '/web/index.php/pim/viewPersonalDetails')
  

  
  
  cy.get(selectorsList.genericField).eq(7).clear({ force: true }).type('2026-07-01')
  
  cy.get('oxd-select-dropdown').contains('Brazilian').click()
  

  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
        cy.get(selectorsList.wrongCredentialAlert)

})
})