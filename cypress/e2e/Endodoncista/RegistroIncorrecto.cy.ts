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
   

    cy.url().should('contain', 'https://endonet-app-staging.web.app/');
    cy.get('.header-sign-in-title').should('be.visible');
    cy.get('.mt-4 > .text-custom-1').click();
    cy.get('#id-card-icon-endodontist > app-card-icon-text > .flex').click();
    cy.get('.mdc-button__label > .ng-star-inserted').click();
    cy.get('.text-xl').should('contain', 'errores');
  });

});