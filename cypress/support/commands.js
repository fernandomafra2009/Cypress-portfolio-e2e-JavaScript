// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('createUser', (isAdmin = true) => {
  const user = {
    nome: isAdmin ? 'QA Automation' : 'Cypress Customer',
    email: `qa_${Date.now()}@teste.com`,
    password: 'Teste@123',
    administrador: isAdmin ? 'true' : 'false',
  }

  return cy.request({
    method: 'POST',
    url: `${Cypress.expose('apiUrl')}/usuarios`,
    body: user,
  }).then((response) => {
    expect(response.status).to.eq(201)
    expect(response.body.message).to.eq(
      'Cadastro realizado com sucesso'
    )
    expect(response.body._id).to.exist

    return cy.wrap(user)
  })
})

Cypress.Commands.add('login', (email, password) => {
  cy.get('[data-testid="email"]')
    .should('be.visible')
    .type(email)

  cy.get('[data-testid="senha"]')
    .should('be.visible')
    .type(password)

  cy.get('[data-testid="entrar"]')
    .should('be.visible')
    .click()
})