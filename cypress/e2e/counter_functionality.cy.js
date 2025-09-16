describe('Counter functionality', () => {
    beforeEach(function () {
        cy.visit('http://127.0.0.1:3000');
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

    it('Counter should display only positive values', () => {
        cy.get('button[id="decrement-btn"]')
            .click().click()
        cy.contains('span[id="counter"]', '-')
            .should('not.exist')
    })
})
