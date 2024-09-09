/// <reference types="cypress"/>
describe('Test Suite', () => {

  beforeEach(() => {
    // Limpiar cookies y almacenamiento local antes de cada test
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.viewport(1440, 900);
    cy.visit('https://endonet-app-staging.web.app/');

    // Verificar si existe el botón de cerrar y hacer clic en él si está presente
    cy.get('body').then(($body) => {
      if ($body.find('.close').length > 0) {
        cy.get('.close').click({ force: true });
      }
    });
  });
  
  it('Login Correcto ingresando con Mail', () => {
    
cy.get('.classic-card').click();
cy.get('#email').click();
cy.get('#email').type('msanz@gux.tech');
cy.get('#password1').click();
cy.get('#password1').type('sB1HZ$iiwB6Ota');
cy.get('.classic-card').click();
cy.get('.mdc-button__label > span').click();
cy.get('.mt-8').submit();
cy.wait(1200);

cy.get(':nth-child(3) > .fuse-vertical-navigation-item-wrapper > .mat-mdc-tooltip-trigger')
.click();
cy.get('.cdk-focused span').click();
cy.get('#mat-input-1').type('Miguel');cy.get(':nth-child(1) > .flex-col > .flex-auto > .div-list-treatments').should('contain.text', 'Miguel');
cy.get(':nth-child(1) > .flex-col > .flex-auto > .div-list-treatments > .justify-end > button > .mat-icon').click();
cy.get(':nth-child(3) > .text-2xl').should('contain.text', 'msanz@gux.tech');
  });
  
  

});