describe('API - Login', () => {
  it('should successfully authenticate a valid user', () => {
    const user = {
      nome: 'API User',
      email: `api_${Date.now()}@teste.com`,
      password: 'Teste@123',
      administrador: 'true',
    }

    cy.request({
      method: 'POST',
      url: `${Cypress.expose('apiUrl')}/usuarios`,
      body: user,
    }).then(() => {
      cy.request({
        method: 'POST',
        url: `${Cypress.expose('apiUrl')}/login`,
        body: {
          email: user.email,
          password: user.password,
        },
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.message).to.eq('Login realizado com sucesso')
        expect(response.body).to.have.property('authorization')
        expect(response.body.authorization).to.be.a('string')
        expect(response.body.authorization.length).to.be.greaterThan(0)
      })
    })
  })
})