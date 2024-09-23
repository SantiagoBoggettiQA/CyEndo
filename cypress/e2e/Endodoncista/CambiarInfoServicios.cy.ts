/// <reference types="cypress" />
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
    cy.get('#email').type('msanz+endodostit@gux.tech');
    cy.get('#password1').click();
    cy.get('#password1').type('sB1HZ$iiwB6Ota');
    cy.get('.classic-card').click();
    cy.get('.mdc-button__label > span').click();
    cy.get('.mt-8').submit();
    cy.wait(1200);

    cy.get('.cal-day-headers').should('be.visible');

    cy.get(':nth-child(3) > .fuse-vertical-navigation-item-wrapper > .mat-mdc-tooltip-trigger').click();
    cy.get('.text-muted-foreground').click();
    cy.wait(550);
    cy.get('#settings-cost-services').click();
    
    // Generar un número aleatorio entre 105001 y 200000
    const randomValue1 = Math.floor(Math.random() * (200000 - 105001)) + 105001;
    cy.get('#mat-input-7').type(randomValue1.toString());

    // Seleccionar aleatoriamente entre los valores 30, 60, 90, 120, 190
    const values = [30, 60, 90, 120, 190];
    const randomValue2 = values[Math.floor(Math.random() * values.length)];
    cy.get('#mat-input-8').type(randomValue2.toString());

    cy.contains('button', 'Guardar cambios').click();
    cy.wait(1000);
    cy.get('.mat-mdc-simple-snack-bar > .mat-mdc-snack-bar-label').should('be.visible');

  });
  
});