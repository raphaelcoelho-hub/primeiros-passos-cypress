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
         
  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUsernameAndPassword(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails('First name', 'Last Name', 'nick Name')
    myInfoPage.fillEmployDetails('Employee Id', 'Other Id')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

    cy.location('pathname').should('contain', '/web/index.php/pim/viewPersonalDetails')
    //cy.get('.oxd-input').eq(7).clear({ force: true }).type('2026-07-01')  
    //cy.get('.oxd-select-dropdown').contains('Brazilian').click()
  })

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUsernameAndPassword(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })
})