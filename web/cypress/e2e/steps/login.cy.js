/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginPages from "../pages/login.pages";
const loginPages = new LoginPages

Given('que eu abro a página de login', () => {
    loginPages.accessLoginPage()
});

When(/^e informo "([^"]*)" e "([^"]*)"$/, (user,pswd) => {
	loginPages.inputDadoslogin(user,pswd)
});

When(/^eu clico no botão de login$/, () => {
	loginPages.sumitButtonLogin()
});

Then(/^eu devo validar as mensagens$/, () => {
    loginPages.validateMessage()
});
