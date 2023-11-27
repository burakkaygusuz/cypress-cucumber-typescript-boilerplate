import './commands';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
Cypress.on('uncaught:exception', (err: Error, runnable: Mocha.Runnable) => {
  return false;
});

// Hide fetch/XHR requests from command log
if (Cypress.config('hideXHRInCommandLog')) {
  const app: Window = window.top;
  if (app && !app.document.head.querySelector('[data-hide-command-log-request]')) {
    const style: HTMLStyleElement = app.document.createElement('style');
    style.innerHTML = '.command-name-request, .command-name-xhr { display: none }';
    style.setAttribute('data-hide-command-log-request', '');
    app.document.head.appendChild(style);
  }
}
