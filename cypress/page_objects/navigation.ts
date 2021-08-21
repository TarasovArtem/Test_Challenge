/// <reference types="Cypress" />

class Navigation {

    mainPage() {
        return cy.visit('/');
    }
}
export default Navigation;