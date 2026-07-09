class MyInfoPage{

    selectorsList() {
        const Selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            submitButton: "[type='submit']",
            comboBoxButton: ".oxd-select-text-input"      
        }

        return Selectors 
    }

  
 

   fillPersonalDetails(firstName, lastName, nickName) {
   cy.get(this.selectorsList().firstNameField).clear().type(firstName)
   cy.get(this.selectorsList().lastNameField).clear().type(lastName)
   cy.get(this.selectorsList().genericField).eq(4).clear().type(nickName)
   }

   fillEmployDetails(EmployeeId, otherId) {
        cy.get(this.selectorsList().genericField).eq(5).clear().type(EmployeeId)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(otherId)
   }


    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })

}

    fillStatus(){
        cy.contains('.oxd-input-group', 'Nationality').find('.oxd-select-text').click({ force: true})



    }

    
}

export default MyInfoPage