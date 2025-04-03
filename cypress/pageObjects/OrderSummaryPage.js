import { BasePage } from "./basePage";

export class OrderSummaryPage extends BasePage{

    static get placeOrderButton(){
        return cy.get('[aria-label="Complete your purchase"]');
    }

}