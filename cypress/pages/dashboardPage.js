class DashboardPage {
    acessDashboardPage () {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dash')
    }
}

export default DashboardPage
