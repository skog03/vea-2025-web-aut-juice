import { BasePage } from "./basePage";

export class PaymentOptionsPage extends BasePage{


    static get selectCard() {
        return cy.get("#mat-radio-46-input");
    }
    static get continueButton(){
        return cy.get('[aria-label="Proceed to review"]');
    }

}