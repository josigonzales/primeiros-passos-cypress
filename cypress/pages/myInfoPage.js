class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: '.oxd-input--active',
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: '.--close',
            genericComboBox: ".oxd-select-text--arrow",
            genericDropdown: ".oxd-select-dropdown",
            submitButton: "[type='submit']"
        }
        return selectors
    }
     myInfoPersonalDetails (username, lastname) {
        cy.get(this.selectorsList().firstNameField).clear().type(username)
        cy.get(this.selectorsList().lastNameField).clear().type(lastname)
        
     }

     myInfoEmployee(employeeId, otherId, driversNumber) { 
        cy.get(this.selectorsList().genericField).eq(3).type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).type(driversNumber)
     }
     
     myInfoStatus() {
        cy.get(this.selectorsList().genericComboBox).eq(0).type('2026-29-08')
        cy.get(this.selectorsList().genericDropdown).contains('American').click()
     }
     saveMyInfoPage () {
        cy.get(this.selectorsList().submitButton).eq(0).click()
     }

}


export default MyInfoPage