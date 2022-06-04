/// <reference types="cypress" />

context('Should Login to the web', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
        cy.fixture("user1").then(user => {
            const username = user.username
            const password = user.password
            cy.login(username, password)
            cy.url().should('include', '/bank/account-summary.html')
        })
    })

    it('Make Payments To Your Saved Payees', () => {
        cy.get('a').contains('Pay Bills').click()
        cy.url().should('include', '/bank/pay-bills.html')

        cy.fixture("user1").then(user1 => {
            const payee = user1.payee
            const account = user1.account
            const amount = user1.amount
            const date = user1.date
            const description = user1.description
            cy.payment(payee, account, amount, date, description)
            cy.url().should('include', '/bank/pay-bills-saved-payee.html')

        })
    })
})