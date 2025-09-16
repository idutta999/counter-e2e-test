describe('example tests', () => {
    it('Should have a title', () => {
        cy.visit('app/index.html')
        cy.contains('increment-btn', 'Increment')
    })
})