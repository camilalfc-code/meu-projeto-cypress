describe('Cadastro de Usuário', () => {

  beforeEach(() => {
    cy.visit('/cadastrarusuarios')
})

  it('CT-CAD-001 — Deve cadastrar usuário com dados válidos', () => {
    cy.get('[data-testid="nome"]').type('Camila QA')
    cy.get('[data-testid="email"]').type(`camila${Date.now()}@teste.com`)
    cy.get('[data-testid="password"]').type('teste123')
    cy.get('[data-testid="cadastrar"]').click()
    cy.contains('Cadastro realizado com sucesso').should('be.visible')
  })

  it('CT-CAD-002 — Deve exibir erro ao cadastrar e-mail já existente', () => {
    cy.get('[data-testid="nome"]').type('Fulano')
    cy.get('[data-testid="email"]').type('fulano@qa.com')
    cy.get('[data-testid="password"]').type('teste')
    cy.get('[data-testid="cadastrar"]').click()
    cy.contains('Este email já está sendo usado').should('be.visible')
  })

  it('CT-CAD-003 — Deve bloquear cadastro com campos vazios', () => {
    cy.get('[data-testid="cadastrar"]').click()
    cy.contains('Nome é obrigatório').should('be.visible')
  })

})