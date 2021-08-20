/// <reference types="Cypress" />

class Filtration {
    getAllItemsBtn() {
        return cy.contains('All');
    }

    getActiveItemsBtn() {
        return cy.contains('Active');
    }

    getCompletedItemsBtn() {
        return cy.contains('Completed');
    }
}
export default Filtration;