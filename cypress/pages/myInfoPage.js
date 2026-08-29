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
    }
     fillMyInfo () {
        cy.get(this.selectorsList.firstNameField).type('Josielle')
        cy.get(this.selectorsList.lastNameField).type('Gonzales')
        cy.get(this.selectorsList.genericField).eq(3).type('ID')
        cy.get(this.selectorsList.genericField).eq(4).type('Other ID')
        cy.get(this.selectorsList.genericField).eq(5).type('Drivers Number')
        cy.get(this.selectorsList.genericComboBox).eq(0).type('2026-29-08')
        cy.get(this.selectorsList.genericDropdown).contains('American').click()
     }
     
     saveMyInfoPage () {
        cy.get(this.selectorsMyInfo.submitButton).eq(0).click()
     }

}


export default MyInfoPage