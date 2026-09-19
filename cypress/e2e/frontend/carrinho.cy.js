describe('Frontend - Carrinho', () => {
  it('should display the cart page after selecting a product', () => {
    cy.createUser(false).then((user) => {
      cy.visit('/')

      cy.login(user.email, user.password)

      cy.contains('h1', 'Serverest Store')
        .should('be.visible')

      cy.get('[data-testid="adicionarNaLista"]')
        .first()
        .should('be.visible')
        .click()

      cy.get('[data-testid="adicionar carrinho"]')
        .should('be.visible')
        .click()

      cy.contains('Em construção aguarde')
        .should('be.visible')
    })
  })
})