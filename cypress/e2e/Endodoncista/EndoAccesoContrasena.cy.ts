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
  
  it('endodoncista aprobado', () => {
    
cy.get('.classic-card').click();
cy.get('#email').click();
cy.get('#email').type('msanz+endodostit@gux.tech');
cy.get('#password1').click();
cy.get('#password1').type('sB1HZ$iiwB6Ota');
cy.get('.classic-card').click();
cy.get('.mdc-button__label > span').click();
cy.get('.mt-8').submit();
cy.wait(1200);

cy.get('.cal-day-headers').should('be.visible');
cy.get('.mat-mdc-menu-trigger > .mat-mdc-button-touch-target').click();
cy.get('a.mat-mdc-menu-item').click();
cy.wait(800)
cy.get('#security').click();
cy.get(':nth-child(1) > .text-secondary').should('contain.text','Coloque su contrasea actual y la nueva');
  });
  
  

});