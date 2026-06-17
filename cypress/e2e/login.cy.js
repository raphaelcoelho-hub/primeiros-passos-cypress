describe('Orange HRM Tests', () => {

  // Isso vai rodar antes de CADA teste abaixo
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it('Login - Succes', () => {
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
    
    // Validações pós-login
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
  })

  it('Login - Fail', () => {
    cy.get("[name='username']").type('Test')
    cy.get("[name='password']").type('test123')
    cy.get("[type='submit']").click()
    
    // Validação da mensagem de erro
    cy.get("[role='alert']")
  })

})


