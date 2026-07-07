class dashboardPage {

    selectorsList() {
       const Selectors = {    
         dashboardGrid: ".orangehrm-dashboard-grid",
    }

    return Selectors 
    }

    checkDashboardPage() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardGrid).should('be.visible')
    }

}

export default dashboardPage