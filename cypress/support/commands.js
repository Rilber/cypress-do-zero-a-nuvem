Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'QA',
    lastName: 'Tester',
    email: 'qa@email.tat.com',
    openTextArea: 'TEST QA'
}) => {
  const longText = Cypress._.repeat('Teste_', 40)
  cy.get('#firstName').type('Name')
  cy.get('#lastName').type('Last Name')
  cy.get('#email').type('useremail@email.com')
  cy.get('#open-text-area').type(longText, { delay: 0 })    
  cy.contains('button', 'Enviar').click()
})