class MenuPage {
    selectorsList () {
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']"     
        }
    }

    acessMyInfo() {
        cy.get(this.selectorsMyInfo.myInfoButton).click()
    }

}

export default MenuPage