import { BasePage } from "./basePage";

export class OrderCompletionPage extends BasePage{

    static get orderConformation(){
        return cy.get('_order-completion-header');
    }

}