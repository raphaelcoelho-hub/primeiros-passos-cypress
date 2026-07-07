import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
   
   
   
   myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
   firstNameField: "[name='firstName']",
   lastNameField: "[name='lastName']",
   genericField: ".oxd-input--active",
   submitButton: "[type='submit']",
   comboBoxButton: ".oxd-select-text-input",
   
  }
         
  it.only('User Info Update - Success', () => {
   loginPage.accessLoginPage()
   loginPage.loginWithUsernameAndPassword(userData.userSuccess.username, userData.userSuccess.password)


    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()



  cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
  
//   cy.get(selectorsList.myInfoButton).click()
//   cy.get(selectorsList.firstNameField).clear().type('Raphael')
//   cy.get(selectorsList.lastNameField).clear().type('Coelho')
//   cy.get(selectorsList.genericField).eq(4).clear().type('123456')
//   cy.get(selectorsList.genericField).eq(5).clear().type('test')
//   cy.get(selectorsList.genericField).eq(6).clear().type('gil')
//   cy.get(selectorsList.genericField).eq(7).clear({ force: true }).type('2026-07-01')
//   cy.contains('label', 'Nationality').next().click()
//   cy.get('oxd-select-dropdown').contains('Brazilian').click()
//   cy.get(selectorsList.submitButton).eq(0).click()

  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
        cy.get(selectorsList.wrongCredentialAlert)

})
})