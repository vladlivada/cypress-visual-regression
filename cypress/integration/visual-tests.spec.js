describe('Visual regression tests', () => {
    it('Should match previous screenshot "home"', () => {
        cy.visit('/about');
        cy.matchImageSnapshot('Visual regression tests -- Should match screenshot about page.snap');
    });
    it("Should match screenshot about page",  () => {
        cy.visit('/about');
        cy.matchImageSnapshot();
    });
});
