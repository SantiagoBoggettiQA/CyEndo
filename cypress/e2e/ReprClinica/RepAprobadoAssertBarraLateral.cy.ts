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
  
  it('Representante aprobado - assert opciones barra lateral', () => {
    
cy.get('.classic-card').click();
cy.get('#email').click();
cy.get('#email').type('msanz+clinic@gux.tech');
cy.get('#password1').click();
cy.get('#password1').type('sB1HZ$iiwB6Ota');
cy.get('.classic-card').click();
cy.get('.mdc-button__label > span').click();
cy.get('.mt-8').submit();
cy.wait(1200);
cy.url().should('contains', 'https://endonet-app-staging.web.app/admin');
cy.get('.m-2').should('be.visible');
cy.get(':nth-child(2) > .fuse-vertical-navigation-item-wrapper > .mat-mdc-tooltip-trigger').should('be.visible');
cy.get(':nth-child(3) > .fuse-vertical-navigation-item-wrapper > .mat-mdc-tooltip-trigger').should('be.visible');
cy.get(':nth-child(4) > .fuse-vertical-navigation-item-wrapper > .mat-mdc-tooltip-trigger').should('be.visible');
cy.get(':nth-child(5) > .fuse-vertical-navigation-item-wrapper > .mat-mdc-tooltip-trigger').should('be.visible');
cy.get('.fuse-vertical-navigation-content-header > .flex > .hidden').should('be.visible');
  });
  
  

});