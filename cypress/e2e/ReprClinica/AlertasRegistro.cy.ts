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
    cy.get('#id-card-icon-clinic_owner > app-card-icon-text > .flex').click();
    cy.get('#clinic_name').click();
    cy.get('#clinic_dni').click();
    cy.get('#first_name').click();
    cy.get('#last_name').click();
    cy.get('#dni').click();
    cy.get('[data-cy="data-cy=input-email"]').click();
    cy.get('#password1').click();
    cy.get('#password2').click();
    cy.get('.mdc-button__label > .ng-star-inserted').click();
    cy.get('#mat-mdc-error-0').should('be.visible');
cy.get('#mat-mdc-error-1').should('be.visible');
cy.get('#mat-mdc-error-2').should('be.visible');
cy.get('#mat-mdc-error-3').should('be.visible');
cy.get('#mat-mdc-error-4').should('be.visible');
cy.get('#mat-mdc-error-5').should('be.visible');
cy.get('#mat-mdc-error-6').should('be.visible');
cy.get('#mat-mdc-error-7').should('be.visible');
  });
  
  

});