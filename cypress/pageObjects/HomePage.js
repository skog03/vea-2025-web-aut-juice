import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton(){
    return cy.get("#navbarAccount")
  }

  static get loginButton(){
    return cy.get("#navbarLoginButton")
  }

  static get userProfileButton(){
    return cy.get("button[aria-label='Go to user profile']")
  }

  static get searchButton(){
    return cy.get("#searchQuery")
  }

  static get searchField(){
    return cy.get("#mat-input-0")
    //or "#searchQuery input"
  }

  static get productBox(){
    return cy.get("[aria-label='Click for more information about the product']")
  }

  static get cardText(){
    return cy.get("mat-dialog-content.mdc-dialog__content")
  }

  static get closeButton(){
    return cy.get("[aria-label='Close Dialog']")
  }

  static get expandReviewsButton(){
    return cy.get("[aria-label='Expand for Reviews']")
  }

  static get reviewField(){
    return cy.get("[aria-label='Text field to review a product']")
  }

  static get submitButton(){
    return cy.get("")
  }



  

  

  
  

  

  
  
  


}
