/// <reference types="Cypress" />

class Search {
    getSearchBtn() {
        return cy.get('.search');
    }

    getAddBtn() {
        return cy.get('.add');
    }

    getInputSearch() {
        return cy.get('input[placeholder="Search"]');
    }

    getAlertInfo() {
         return cy.get('.alert-info');
    }
}
export default Search;