/// <reference types="Cypress"  />  

 const url = Cypress.config('baseUrl')

 class DynamicPages {
    accessLoginPage () {
        cy.visit(url + '/dynamic_loading/1')       
    }
 }
export default DynamicPages