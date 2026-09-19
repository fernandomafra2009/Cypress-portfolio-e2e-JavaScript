describe('Frontend - Configuration Test', () => {
  it('should access ServeRest frontend', () => {
    cy.visit('/')

    cy.url().should('include', 'front.serverest.dev')
  })
})