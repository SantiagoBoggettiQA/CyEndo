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
  
  it('Verificar que la página cargue correctamente', () => {
    
cy.get('.classic-card').click();
cy.get('#email').click();
cy.get('#email').type('msanz@gux.tech');
cy.get('#password1').click();
cy.get('#password1').type('1369875Aa');
cy.get('.classic-card').click();
cy.get('#mat-mdc-error-0').should('be.visible');
cy.get('.mdc-button__label > span').click();
cy.get('.mt-8').submit();
cy.get('.header-sign-in-title').should('be.visible')
  });
  
  

});