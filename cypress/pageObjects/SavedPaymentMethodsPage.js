import { BasePage } from "./basePage";

export class SavedPaymentMethodsPage extends BasePage{
    static get newCardSelect(){
        return cy.get("#mat-expansion-panel-header-0");
    }

    static get nameField(){
        return cy.get("#mat-input-1");
    }

    static get cardNumberField(){
        return cy.get("#mat-input-2");
    }

    static get expirySelect(){
        return cy.get("#mat-input-3");
    }

    static get yearSelect(){
        return cy.get("#mat-input-4");
    }

    static get submitButton(){
        return cy.get("#submitButton");
    }

    static get cardsBox(){
        return cy.get("[role='table']");
    }

    
}
