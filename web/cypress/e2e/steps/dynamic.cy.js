/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import DynamicPages from "../pages/dynamic_pages";
const dynamic = new DynamicPages

Given(/^que eu acesso o site$/, () => {
    dynamic.accessLoginPage()
});

When(/^eu clico no botão start$/, () => {
	cy.contains('button', 'Start').click()
});

// Obs: foi definido o tempo de 10s no cypress-config, caso se não tivesse, poderia utilizar o cy.intercept
Then(/^eu aguardo a mensagem aparecer validando a mensagem$/, () => {
	cy.contains('h4','Hello World!').should('be.visible')
});

