describe('The Odoo login page', function() {
    it('successfully loads', function() {
        cy.visit(Cypress.env('url'));
        cy.log(`Connection to ${ Cypress.env('url') } - OK`);

        cy.get('input[name="login"]')
            .type(Cypress.env('username'))
            .should("have.value", Cypress.env('username'));
        cy.log('Username injection - OK');

        cy.get('input[name="password"]')
            .type(Cypress.env('password'))
            .should("have.value", Cypress.env('password'));
        cy.log('Password injection - OK');

        cy.get("form").submit();
        cy.log('Login - OK');

        cy.get('a[data-menu="559"]').click();
        cy.log('Access Assitant module - OK');

        // Check in - check out

        let checkerLink = cy.get('a.o_hr_attendance_sign_in_out_icon');
        
        checkerLink.then(($link) => {
            let className = $link[0].className;

            if (className.includes('fa-sign-in')) {
                checkerLink.click();
                cy.log('Check In - OK');
            } else if (className.includes('fa-sign-out')) {
                checkerLink.click();
                cy.log('Check Out - OK');
            } else {
                cy.log('Check In/Out - FAIL');
            }
        });
    })
});