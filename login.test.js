/// <reference types="cypress" />

describe('Working with Inputs', () => {
    it('Visit The Website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
    })
    it('Should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    })

    it('Should fill password', () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
    })

    it('Should check a checkbox', () => {
        cy.get('#user_remember_me')
        cy.get('#user_remember_me').type('checkbox')
    })
})