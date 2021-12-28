//testleri yuruttugun dosya
import config from '../config.js'

describe('under.....', function () {
    it ('login page', fuction() {
        cy.visit("/");
        cy.wait(2000);
        cy.get('form').within(function() {
            cy.get(config.email).type(...);
            cy.get(config.password).type(...);
        })
    })
}