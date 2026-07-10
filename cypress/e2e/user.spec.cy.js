import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')

const chance = new Chance()

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

    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.string())
    myInfoPage.fillEmployDetails(chance.prime(), chance.string())
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

    cy.location('pathname').should('contain', '/web/index.php/pim/viewPersonalDetails')
    //cy.get('.oxd-input').eq(7).clear({ force: true }).type('2026-07-01')  
    //cy.get('.oxd-select-dropdown').contains('Brazilian').click()
  })


})