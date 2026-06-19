describe('Orange HRM Tests', () => {

  const selectorsList = {
   usernameField: "[name='username']",
   passwordField: "[name='password']",
   loginButton: "[type='submit']",
   sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
   wrongCredentialAlert: "[role='alert']"
  }
  // Isso vai rodar antes de CADA teste abaixo
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it('Login - Succes', () => {
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    
    // Validações pós-login
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })

  it('Login - Fail', () => {
    cy.get(selectorsList.usernameField).type('Test')
    cy.get(selectorsList.passwordField).type('test123')
    cy.get(selectorsList.loginButton).click()

    // Validação da mensagem de erro
    cy.get(selectorsList.wrongCredentialAlert)

})
})
