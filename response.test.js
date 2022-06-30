describe('Validate Body', () => {
  it.only('Succesfully validate body', () => {
        var user = {
            "name": "overgrow",
            "url": "https://pokeapi.co/api/v2/ability/65/"
        }
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/bulbasaur', user).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.abilities[0].ability.name).to.eq(user.name)
        })
    })
})
