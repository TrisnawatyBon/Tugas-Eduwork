/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { LoginPage } from "./LoginPage";

Given('I open Login page', () => {
    LoginPage.visit()
})

When('I submit Login', () => {
    LoginPage.fillUsername('username')
    LoginPage.fillPassword('password')
    LoginPage.signIn()
})

Then('I should see homepage', () => {
    cy.get('#account_summary_tab').should('be.visible')
})
