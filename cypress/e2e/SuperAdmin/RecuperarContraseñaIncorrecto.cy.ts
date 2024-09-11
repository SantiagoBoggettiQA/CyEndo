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
  
  it('Verificar recuperar contraseña correcto', () => {
 cy.visit('https://endonet-app-staging.web.app/auth/sign-in/');
cy.get('.auth-classic').click();
cy.get('[data-cy=link-forgot-password]').click();
cy.get('.mat-mdc-form-field-infix').click();
cy.get('[data-cy="data-cy=input-email"]').type('mimail@gux.tech');
cy.get('.mat-mdc-form-field-subscript-wrapper').click();
cy.get('.mdc-button__label > .ng-star-inserted').click();
cy.get('.ng-submitted').submit();



cy.get('.sm\\:flex-col > .flex-col > .text-center')
  .should('contain.text', 'Usuario no encontrado.');



  });
  
  

});