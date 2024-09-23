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
  
  it('Habilitar espacio en agenda', () => {
    
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
cy.get('.cal-day-columns > :nth-child(1) > :nth-child(3) > :nth-child(1) > .cal-hour-segment').click();
cy.wait(550);
cy.contains('button', 'Habilitar espacio').click();
cy.get('#mat-mdc-chip-list-input-0').click();
cy.wait(500)
cy.get('#mat-option-3').click();
cy.get('#mat-select-value-1').click();
cy.get('#mat-option-0 > .mdc-list-item__primary-text').click();
cy.contains('button', 'Guardar').click();
cy.get('.flex-col > .text-xl').should('contain.text','Espacio Habilitado Exitosamente');
cy.wait(500)
cy.contains('button', 'Confirm').click();
cy.wait(1000)
cy.get(':nth-child(1) > .cal-events-container > .cal-event-container > mwl-calendar-week-view-event.ng-star-inserted > .cal-event > mwl-calendar-event-title > .cal-event-title').click();
cy.wait(800)
cy.contains('button', 'Bloquear espacio').click();
cy.get('#mat-select-value-3').click();
cy.get('#mat-option-5').click();

cy.get('#mat-input-0').click();
cy.get('#mat-input-0').type('qa');

cy.contains('button', 'Guardar').click();
cy.wait(800);


cy.get('.flex-col > .text-xl').should('be.visible');
cy.contains('button', 'Confirm').click();
cy.get('[style="top: 0px; height: 30px; left: 50%; width: 50%;"] > mwl-calendar-week-view-event.ng-star-inserted > .cal-event').click();
cy.contains('button', 'Bloquear espacio').click();
cy.contains('button', 'Eliminar espacio habilitado').click();
cy.contains('button', 'Confirm').click();
cy.wait(2000)
cy.get(':nth-child(1) > .cal-events-container > .cal-event-container > mwl-calendar-week-view-event.ng-star-inserted > .cal-event').click();
cy.contains('button', 'Bloquear espacio').click();
cy.contains('button', 'Eliminar espacio habilitado').click();
cy.contains('button', 'Confirm').click();

  });
  
  

});