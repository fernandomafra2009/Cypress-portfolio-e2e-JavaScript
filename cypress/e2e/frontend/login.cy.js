describe('Frontend - Login', () => {
  it('should successfully authenticate a valid user', () => {
    cy.createUser().then((user) => {
      cy.visit('/')
      cy.login(user.email, user.password)

      cy.contains('h1', `Bem Vindo ${user.nome}`)
        .should('be.visible')

      cy.contains('Este é seu sistema para administrar seu ecommerce.')
        .should('be.visible')
    })
  })
})