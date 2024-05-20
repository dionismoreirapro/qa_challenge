/// <reference types="Cypress"  />
import DynamicElements from "../elements/dynamic_elements"

const dynamic_elements = new DynamicElements

 const url = Cypress.config('baseUrl')

 class DynamicPages {
    accessLoginPage () {
        cy.visit(url + '/dynamic_loading/1')       
    }
 }
export default DynamicPages