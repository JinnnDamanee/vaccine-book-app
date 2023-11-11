describe('main flow', () => {
  it('main', () => {
    cy.visit('/')
    cy.get('video').should('exist')
    cy.get('video').should('have.prop', 'paused', false)

    cy.wait(5000)

    cy.get('video').parent().find('button').click()
    cy.get('video').should('have.prop', 'paused', true)
    
    cy.contains('Go check the hospital').should('exist').click()

    cy.visit('/hospital')
    cy.get('body>div').eq(1).find('img').should('have.length', 3)
  })
})