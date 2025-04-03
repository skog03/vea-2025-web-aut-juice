import { BasePage } from "./basePage";

export class CreateAddressPage extends BasePage{

    static get countryField() {
        return cy.get('#mat-input-1');
    }
    static get nameField() {
        return cy.get('#mat-input-2');
    }
    static get numberField() {
        return cy.get('#mat-input-3');
    }
    static get zipCodeField() {
        return cy.get('#mat-input-4');
    }
    static get addressField() {
        return cy.get('#address');
    }
    static get cityField() {
        return cy.get('#mat-input-6');
    }
    static get submitButton() {
        return cy.get('#submitButton');
    }
    static get seeAddressBox(){
        return cy.get("[role='row']");
    }
    
}