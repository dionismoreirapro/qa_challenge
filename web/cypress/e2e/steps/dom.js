/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import DomPages from "../pages/dom_pages";
const dom_pages = new DomPages


Given(/^que eu acesso o site$/, () => {
	dom_pages.accessLoginPage()
});

When(/^eu clico no botão$/, () => {
	dom_pages.clickButton()
});

Then(/^a imagem irá se alterar$/, () => {
	dom_pages.validateCanvas()
});




//a[@class='button'][contains(.,'baz')]

