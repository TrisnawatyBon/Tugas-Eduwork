/// <reference types="cypress" />

context('Login to the web', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com')
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
            
            cy.get('#password').clear()
            cy.get('#password').type(password)
            
            cy.get('#login-button').click()
            cy.url().should('include', '/inventory.html')
        })
    })

    it('Shopping from the web', () => {
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
        cy.get('#shopping_cart_container').click()
        cy.url().should('include', '/cart.html')
        cy.get('#checkout').click()
        cy.url().should('include', '/checkout-step-one.html')

        cy.fixture("user").then(user => {
            const firstName = user.firstName
            const lastName = user.lastName
            const postalCode = user.postalCode
            cy.get('#first-name').clear()
            cy.get('#first-name').type(firstName)

            cy.get('#last-name').clear()
            cy.get('#last-name').type(lastName)

            cy.get('#postal-code').clear()
            cy.get('#postal-code').type(postalCode)

            cy.get('#continue').click()
            cy.url().should('include', '/checkout-step-two.html')
            cy.get('#finish').click()
            cy.url().should('include', '/checkout-complete.html')

        })
    })
})