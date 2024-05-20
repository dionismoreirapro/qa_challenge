/// <reference types="Cypress"  />
import LoginElements from "../elements/login_elements"

const loginElements = new LoginElements

 const url = Cypress.config('baseUrl')

class LoginPages {

    accessLoginPage () {
        cy.visit(url + '/login')
    }

    inputDadoslogin (user , pswd){
        console.log(user,pswd)
        cy.get(loginElements.inputUserName()).type(user)
        cy.get(loginElements.inputUsePassword()).type(pswd, { log: false })
    }

    sumitButtonLogin(){
        cy.contains('button', 'Login').click()
    } 

    validateMessage(){
        cy.contains('h4','Welcome to the Secure Area. When you are done click logout below.').should('be.visible')
        cy.contains('#flash','You logged into a secure area!').should('be.visible')
    }

} export default LoginPages