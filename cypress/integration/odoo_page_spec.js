describe('The Odoo login page', function() {
    it('successfully loads', function() {
        cy.visit('https://mi.eset.es/web/login');

        cy.get('input[name="login"]')
            .type(Cypress.env('username'))
            .should("have.value", Cypress.env('username'));

        cy.get('input[name="password"]')
            .type(Cypress.env('password'))
            .should("have.value", Cypress.env('password'));

        cy.get("form").submit();

        cy.get('a[data-menu="559"]').click();
    })
});