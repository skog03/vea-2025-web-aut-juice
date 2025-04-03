import { BasePage } from "./basePage";

export class SavedAddressesPage extends BasePage{

    static get addNewAddressButton() {
        return cy.get('[aria-label="Add a new address"]');
    }
    
}