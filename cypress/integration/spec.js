describe('page', () => {
  before(() => {
    cy.visit('http://localhost:5008')
  })

  it('works', () => {
    cy.get('[data-testId$=up]').eq(1).click()
  })

  it('fails', () => {
    cy.get('[data-testId$=down]').eq(1).click()
  })
})
