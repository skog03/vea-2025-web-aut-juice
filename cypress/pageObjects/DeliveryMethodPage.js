import { BasePage } from "./basePage";

export class DeliveryMethodPage extends BasePage{


    static get standartDeliveryRadioButton() {
        return cy.get("#mat-radio-45-input");
    }

    static get continueButton() {
        return cy.get("[aria-label='Proceed to delivery method selection']");
    }
    


    
    
}