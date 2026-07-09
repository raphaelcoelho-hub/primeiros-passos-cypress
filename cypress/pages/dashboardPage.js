class dashboardPage {

    selectorsList() {
       const Selectors = {    
         dashboardGrid: ".orangehrm-dashboard-grid",
    }

    return Selectors 
    }

    checkDashboardPage() {
        cy.get(this.selectorsList().dashboardGrid, { timeout: 10000}).should('be.visible')
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        
    }

}

export default dashboardPage