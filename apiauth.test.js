  it('Successfully login via API', () => {
        cy.request({
            method: 'GET',
            url: 'https://the-internet.herokuapp.com/basic_auth',
            failOnStatusCode: false
        })
        cy.loginViaAPI(username = Cypress.env('userEmail'), password = Cypress.env('userPassword'))
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    })
})
