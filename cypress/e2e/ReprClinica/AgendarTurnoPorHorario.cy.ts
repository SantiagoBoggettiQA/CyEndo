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

  it('Agendar turno por horario', () => {
    // Interacción con los campos de login
    cy.get('.classic-card').click();
    cy.get('#email').click();
    cy.get('#email').type('msanz+clinic@gux.tech');
    cy.get('#password1').click();
    cy.get('#password1').type('sB1HZ$iiwB6Ota');
    cy.get('.classic-card').click();
    cy.get('.mdc-button__label > span').click();
    cy.get('.mt-8').submit();
    cy.wait(1200);
    
    // Verificación de URL
    cy.url().should('contains', 'https://endonet-app-staging.web.app/admin');
    cy.get('.m-2').should('be.visible');
    cy.contains('button', 'Por horario').click();
    
    // Selección de opciones en menús desplegables
    cy.get('#mat-select-value-1').click();
    cy.get('[role="option"]').then(($options) => { // Selecciona todas las opciones
      const randomIndex = Math.floor(Math.random() * $options.length); // Genera un índice aleatorio
      cy.wrap($options[randomIndex]).click(); // Clica en la opción aleatoria
    });

    cy.get('body').then(($body) => {
      const $select = $body.find('#mat-select-value-3');
      if ($select.length && $select.is(':visible')) {
        cy.get('#mat-select-value-3').click(); // Abre el menú desplegable
        cy.get('[role="option"]').then(($options) => { // Selecciona todas las opciones
          const randomIndex = Math.floor(Math.random() * $options.length); // Genera un índice aleatorio
          cy.wrap($options[randomIndex]).click(); // Clica en la opción aleatoria
        });
      } else {
        cy.log('Elemento #mat-select-value-3 no está presente o no es visible, continuando...');
      }
    });

    // Seleccionar un día aleatorio del calendario entre hoy y el último día de la semana
    const today = new Date();
    const currentDay = today.getDate();
    const currentWeekday = today.getDay(); // Día de la semana (0=domingo, 1=lunes, ..., 6=sábado)
    const startOfWeek = new Date(today);
    const endOfWeek = new Date(today);

    // Ajustar las fechas para obtener el domingo y el sábado de la semana actual
    startOfWeek.setDate(today.getDate() - currentWeekday); // Domingo
    endOfWeek.setDate(today.getDate() + (6 - currentWeekday)); // Sábado

    cy.get('.mat-calendar-body-cell-content').filter((index, element) => {
      const day = parseInt(Cypress.$(element).text());
      const dayDate = new Date(today.getFullYear(), today.getMonth(), day); // Crear objeto de fecha
      return dayDate >= startOfWeek && dayDate <= endOfWeek; // Filtrar días entre hoy y el último día de la semana
    }).then(($filteredDays) => {
      const randomDayIndex = Math.floor(Math.random() * $filteredDays.length);
      cy.wrap($filteredDays[randomDayIndex]).click(); // Clic en un día aleatorio dentro de la misma semana
    });

    // Espera lo mínimo necesario para que los elementos estén disponibles
    cy.get('#searchInput').type('endodoncista', {force: true});

    // Clicar en el card específico usando el perfil del endodoncista
    cy.get('article img[alt="Profile picture of ENDODONCISTA  guxero"]')
      .parents('article')
      .click();

    // Seleccionar aleatoriamente cualquier evento disponible
    cy.get('.cal-event').its('length').then((len) => {
      const randomIndex = Math.floor(Math.random() * len);
      cy.get('.cal-event').eq(randomIndex).click();
    });

    // Completar selección y agendar turno
    cy.get('#mat-input-1').click();
    cy.get('#mat-option-12 > .mdc-list-item__primary-text').click(); // Selección de duración del turno
    cy.contains('button', 'Agendar').click();
    
    // Verificación final de que el turno fue agendado correctamente
    cy.get(':nth-child(1) > .flex-col > .flex-auto > .div-list-treatments').should('be.visible');
  });
});