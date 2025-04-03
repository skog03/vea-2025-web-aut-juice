import { BasePage } from "./basePage";

export class RegistrationPage extends BasePage{
    //url not nessessary as we are opening the page indirectly

    //email
    static get emailField(){
        return cy.get("#emailControl")
    }
    //password
    static get passwordField(){
        return cy.get("#passwordControl")
    }
    //repeatpassw
    static get repeatPasswordField(){
        return cy.get("#repeatPasswordControl")
    }
    //sec q field
    static get securityQuestionField(){
        return cy.get("[name='securityQuestion']")
    }
    
    //security question options - click field, se;ect nessessary option
    static get securityQuestionOptionsField(){
        return cy.get("mat-option");
    }
    
    //answer fld
    static get answerField(){
        return cy.get("#securityAnswerControl")
    }
    
    //register btn
    static get registerButton(){
        return cy.get("#registerButton")
    }
    
}