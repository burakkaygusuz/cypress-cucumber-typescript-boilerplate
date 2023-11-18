import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

Given(/^I am on the login page$/, () => {
  cy.visit('/');
});
When(
  /^I enter the username ([^"]*) and password ([^"]*)$/,
  (username: string, password: string) => {
    cy.enterCredentials(username, password);
  },
);
When(/^I click on the login button$/, () => {
  cy.get('#login-button').should('be.visible').click();
});
Then(/^I should be redirected to the ([^"]*) page$/, (page: string) => {
  cy.get('span.title')
    .invoke('text')
    .then(($text) => {
      expect($text).to.be.eq(page);
    });
});
