const enterCredentials = (username: string, password: string) => {
  cy.get('#user-name').should('be.visible').and('be.empty');
  cy.get('#user-name').type(username);
  cy.get('#user-name').should('have.value', username);
  cy.get('#password').should('be.visible').and('be.empty');
  cy.get('#password').type(password);
  cy.get('#password').should('have.value', password);
};

Cypress.Commands.add('enterCredentials', enterCredentials);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      enterCredentials: typeof enterCredentials;
    }
  }
}

export {};
