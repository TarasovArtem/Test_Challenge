/// <reference types="Cypress" />

class Filtres {
    getAllItemsBtn() {
        return cy.get('.selected');
    }

    getActiveItemsBtn() { 
        return cy.get('.Active');
    }

    getCompletedItemsBtn() { 
        return cy.get('.Completed');
    }
}
export default Filtres;