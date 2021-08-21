/// <reference types="Cypress" />

import { FiltrationBtn } from './index'
class Filtration {

    getFiltrationBtn(name: FiltrationBtn) {
        return cy.contains(name);
    }
}
export default Filtration;