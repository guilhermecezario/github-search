describe('Online tickets selling app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('successfully list users', () => {
    cy.get('input[type="text"]')
      .should('be.visible')
      .type('John Doe')
    
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()

    cy.contains('https://github.com')
      .should('be.visible')
  })

  it('successfully show users', () => {
    cy.get('input[type="text"]')
      .should('be.visible')
      .type('John Doe')
    
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()

    const itemList = cy.get('ul li:first')

    itemList.click()

    cy.contains('Fechar')
      .should('be.visible')
  })

  it('successfully close modal show users', () => {
    cy.get('input[type="text"]')
      .should('be.visible')
      .type('John Doe')
    
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()

    const itemList = cy.get('ul li:first')

    itemList.click()

    cy.get('button[type="button"]')
      .should('be.visible')
      .click()

    cy.contains('button[type="button"]').should('not.exist')
  })
})