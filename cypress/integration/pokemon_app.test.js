import { cypress as cy } from 'cypress'

describe('Cypress - Pokemon app', () => {
  it('should open the application', () => {
    cy.visit('http://localhost:8080')
    cy.contains('bulbasaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})
