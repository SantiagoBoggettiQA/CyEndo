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
  
  it('Verificar Onboarding', () => {
    
cy.get('.classic-card').click();
cy.get('#email').click();
cy.get('#email').type('hiyeddoizaqui-7436@yopmail.com');
cy.get('#password1').click();
cy.get('#password1').type('sB1HZ$iiwB6Ota');
cy.get('.classic-card').click();
cy.get('.mdc-button__label > span').click();
cy.get('.mt-8').submit();
cy.wait(1200);

cy.get('.mdc-button__label > span').should('contain.text', 'Costos de mis servicios');
cy.get('.flex-col > .text-xl').should('contain.text', '¡Define los costos de tus servicios!');

  });
  
  

});