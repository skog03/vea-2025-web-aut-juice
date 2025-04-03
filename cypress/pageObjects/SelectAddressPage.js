import { BasePage } from "./basePage";

export class SelectAddressPage extends BasePage{

    static get selectAddressRadioButton() {
        return cy.get("#mat-radio-42-input");
    }

    static get continueButton() {
        return cy.get("[aria-label='Proceed to payment selection']");
    }

    
    
}