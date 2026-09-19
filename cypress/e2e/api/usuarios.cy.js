describe('API - Users', () => {
  it('should successfully create a new user', () => {
    const user = {
      nome: 'QA Automation',
      email: `qa_${Date.now()}@teste.com`,
      password: 'Teste@123',
      administrador: 'true',
    }

    cy.request({
      method: 'POST',
      url: `${Cypress.expose('apiUrl')}/usuarios`,
      body: user,
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq(
        'Cadastro realizado com sucesso'
      )
      expect(response.body._id).to.exist
      expect(response.body._id).to.be.a('string')
    })
  })
})