describe('API - Products', () => {
  it('should successfully retrieve the list of products', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.expose('apiUrl')}/produtos`,
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('quantidade')
      expect(response.body).to.have.property('produtos')
      expect(response.body.produtos).to.be.an('array')
      expect(response.body.produtos.length).to.be.greaterThan(0)
    })
  })
})