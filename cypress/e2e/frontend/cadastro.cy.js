describe('Frontend - Cadastro', () => {
  it('should successfully register a new user', () => {
    const user = {
      nome: 'Cypress Test User',
      email: `cypress_${Date.now()}@teste.com`,
      password: 'Teste@123',
    }

    cy.visit('/')

    cy.contains('a', 'Cadastre-se')
      .should('be.visible')
      .click()

    cy.get('[data-testid="nome"]')
      .should('be.visible')
      .type(user.nome)

    cy.get('[data-testid="email"]')
      .should('be.visible')
      .type(user.email)

    cy.get('[data-testid="password"]')
      .should('be.visible')
      .type(user.password)

    cy.get('[data-testid="checkbox"]')
      .should('be.visible')
      .check()

    cy.get('[data-testid="cadastrar"]')
      .should('be.visible')
      .click()

    cy.contains('Cadastro realizado com sucesso')
      .should('be.visible')

    cy.contains('h1', `Bem Vindo ${user.nome}`)
      .should('be.visible')

    cy.contains(
      'Este é seu sistema para administrar seu ecommerce.'
    ).should('be.visible')
  })
})