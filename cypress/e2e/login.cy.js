describe('Login', () => {

  it('Deve exibir erro ao fazer login com senha incorreta', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('fulano@qa.com')
    cy.get('[data-testid="senha"]').type('senhaerrada')
    cy.get('[data-testid="entrar"]').click()
    cy.contains('Email e/ou senha inválidos').should('be.visible')
  })   
    
  it('Deve exibir erro ao deixar email vazio', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="senha"]').type('123456')
    cy.get('[data-testid="entrar"]').click()
    cy.contains('Email é obrigatório').should('be.visible')
  })
  
  it('Deve exibir erro ao deixar senha vazia', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('fulano@qa.com')
    cy.get('[data-testid="entrar"]').click()
    cy.contains('Password é obrigatório').should('be.visible')
  })

  it('Deve realizar login com sucesso', () => {
  cy.visit('https://front.serverest.dev/login')
  cy.get('[data-testid="email"]').type('fulano@qa.com')
  cy.get('[data-testid="senha"]').type('123456')
  cy.get('[data-testid="entrar"]').click()
  cy.contains('Home').should('be.visible')
  })
})