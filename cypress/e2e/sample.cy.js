describe('example tests', () => {
    it('Should have a title', () => {
        cy.visit('counter-e2e-test/app/index.html')
        cy.get('button[id="increment-btn"]')
            .should('be.enabled')
    })
})