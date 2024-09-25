/// <reference types="cypress"/>
describe('Test Suite', () => {
  
  // Lista de RUTs
  const rutList = [
    "1.044.783-6", "1.101.851-3", "1.121.770-2", "1.239.369-5", "1.283.709-7",
    "1.736.611-4", "1.774.899-8", "1.903.694-4", "2.177.969-5", "3.150.296-9",
    "3.224.293-6", "3.224.961-2", "3.335.951-9", "3.380.956-5", "3.671.737-8",
    "3.694.337-8", "3.714.827-K", "3.720.647-4", "3.809.109-3", "3.918.971-2",
    "4.275.436-6", "4.305.318-3", "4.692.200-K", "4.792.069-8", "4.926.891-2",
    "4.949.373-8", "5.008.744-1", "5.286.853-K", "5.431.534-1", "5.665.681-2",
    "5.742.845-7", "5.802.108-3", "5.835.151-2", "5.935.258-K", "6.692.379-7",
    "6.760.470-9", "7.142.415-4", "7.147.964-1", "7.385.071-1", "7.430.418-4",
    "7.514.221-8", "7.752.170-4", "8.237.138-9", "8.289.865-4", "8.391.959-0",
    "8.464.586-9", "8.610.083-5", "9.090.506-6", "9.162.490-7", "9.206.614-2",
    "9.207.554-0", "9.303.847-9", "9.775.411-K", "10.028.647-5", "10.391.779-4",
    "10.615.589-5", "11.113.686-6", "12.099.825-0", "12.190.464-0", "12.414.893-6",
    "12.666.487-7", "12.763.551-K", "12.941.716-1", "13.472.547-8", "13.745.507-2",
    "14.051.889-1", "14.059.497-0", "14.170.176-2", "14.433.419-1", "14.833.605-9",
    "14.837.034-6", "14.969.401-3", "15.263.042-5", "15.340.143-8", "15.499.115-8",
    "15.507.471-K", "16.144.355-7", "16.551.017-8", "16.775.200-4", "17.006.189-6",
    "17.185.325-7", "17.598.260-4", "17.677.726-5", "17.736.824-5", "17.766.015-9",
    "17.766.845-1", "17.924.746-1", "17.947.513-8", "17.967.151-4", "18.159.944-8",
    "18.174.594-0", "18.294.698-2", "18.343.791-7", "18.668.620-9", "18.808.340-4",
    "18.856.659-6", "18.956.068-0", "18.986.230-K", "19.455.065-0", "19.468.446-0",
    "20.109.838-6", "20.159.441-3", "20.332.077-9", "20.444.758-6", "20.776.079-K",
    "20.915.636-9", "21.158.831-4", "21.386.020-8", "21.717.713-8", "21.921.438-3",
    "22.169.162-8", "22.468.162-3", "22.737.077-7", "22.851.578-7", "22.947.213-5",
    "23.145.894-8", "23.216.832-3", "23.291.922-1", "23.405.806-1", "23.412.522-2",
    "23.438.522-4", "23.809.918-8", "23.842.454-2", "23.910.544-0", "24.019.658-1",
    "24.213.828-7", "24.214.576-3", "24.816.022-5", "25.055.476-1", "25.354.245-4",
    "25.748.060-7", "25.947.990-8", "26.374.321-0", "26.480.102-8", "26.638.520-K",
    "26.747.698-5", "27.086.805-3", "27.387.542-5", "27.630.260-4", "28.348.447-5",
    "28.735.443-6", "28.922.396-7", "29.057.459-5", "29.067.635-5", "29.092.279-8",
    "29.620.680-6", "29.703.396-4", "29.925.812-2", "29.997.581-9", "30.259.989-0",
    "31.017.533-1", "31.298.040-1", "31.363.284-9", "31.501.200-7", "31.709.828-6",
    "31.789.797-9", "31.945.605-8", "32.423.565-5", "32.524.135-7", "32.534.757-0",
    "32.821.504-7", "32.954.693-4", "33.635.945-7", "33.788.934-4", "33.941.876-4",
    "34.009.034-9", "34.291.814-K", "34.611.875-K", "34.698.562-3", "34.909.763-K",
    "35.324.135-4", "35.598.978-K", "36.007.201-0", "36.412.676-K", "36.687.017-2",
    "36.872.225-1", "36.876.411-6", "36.985.977-3", "37.294.332-7", "37.307.149-8",
    "37.427.378-7", "37.507.271-8", "37.618.734-9", "37.830.859-3", "38.058.057-8",
    "38.172.009-8", "38.516.911-6", "38.784.413-9", "38.922.089-2", "38.983.439-4",
    "39.133.707-1", "39.299.561-7", "39.304.240-0", "39.335.044-K", "39.499.560-6",
    "39.556.357-2", "39.713.308-7", "39.743.092-8", "39.878.327-1", "39.998.320-7"
  ];

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
  
  it('creacion de paciente', () => {
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

    // Seleccionar un día aleatorio del calendario entre hoy y el último día del mes
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
    cy.get('#mat-input-1').type('paciente x');

    // Selección aleatoria de RUT
    const randomRut = rutList[Math.floor(Math.random() * rutList.length)];
    cy.get('#dni').type(randomRut);

    // Generar correo electrónico aleatorio
    const randomEmail = `user${Math.floor(Math.random() * 1000)}@example.com`;
    cy.get('#first_name').type('paciente');
    cy.get('#last_name').type('paciente');
    cy.get('#email').type(randomEmail);
    cy.get('.bg-teal-800 > img').click();
 
    cy.contains('button', 'Agendar').click();
    
    // Verificación final de que el turno fue agendado correctamente
    cy.get(':nth-child(1) > .flex-col > .flex-auto > .div-list-treatments').should('be.visible');
  });
});