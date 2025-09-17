describe('Counter Availability', () => {
    beforeEach(function () {
        // cy.visit(Cypress.config().baseUrl);
        cy.visit('app/index.html');
    })

    it('Should have a title', () => {
        cy.get('h1')
            .contains('Counter')
    })

    it('Increment should be enabled', () => {
        cy.get('button[id="increment-btn"]')
            .should('be.enabled')
    })

    it('Decrement should be enabled', () => {
        cy.get('button[id="decrement-btn"]')
            .should('be.enabled')
    })

})

describe('Counter core functionality', () => {
    beforeEach(function () {
        // cy.visit(Cypress.config().baseUrl);
        cy.visit('app/index.html');
    })

    it('Increment should work', () => {
        cy.get('button[id="increment-btn"]')
            .click()
        cy.get('span[id="counter"]')
            .should('have.text', '1')
    })

    it('Counter should display only positive values', () => {
        cy.get('button[id="decrement-btn"]')
            .click().click()
        cy.contains('span[id="counter"]', '-')
            .should('not.exist')
    })
})
