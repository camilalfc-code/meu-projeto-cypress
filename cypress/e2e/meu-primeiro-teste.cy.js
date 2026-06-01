it('Deve exibir erro ao fazer login com senha incorreta', () => {
  cy.visit('https://front.serverest.dev/login')
  cy.get('[data-testid="email"]').type('fulano@qa.com')
  cy.get('[data-testid="senha"]').type('senhaerrada')
  cy.get('[data-testid="entrar"]').click()
  cy.contains('Email e/ou senha inválidos').should('be.visible')
})