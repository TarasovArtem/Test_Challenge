/// <reference types="Cypress" />

class Search {

    getSearchBtn() {
        return cy.get('.search');
    }

    getInputSearch() {
        return cy.get('input[placeholder="Search"]');
    }

    getAlertInfo() {
         return cy.get('.alert-info');
    }
}
export default Search;