describe('Orange HRM Tests', () => {

const selectorsList = {
  usernameField: "[name='username']" 
}

  it('Login - Success ', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("['type='submit']").click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(".oxd-topbar-header-breadcrumb-module").contains('Dashboard').should('be.visible') 
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('teste') 
    cy.get("[name='password']").type('teste123')
    cy.get("[type='submit']").click()
    cy.get("[role='alert']")
  })
  })


