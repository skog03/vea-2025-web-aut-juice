import { BasketPage } from "../pageObjects/BasketPage";
import { CreateAddressPage } from "../pageObjects/CreateAddressPage";
import { DeliveryMethodPage } from "../pageObjects/DeliveryMethodPage";
import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { OrderCompletionPage } from "../pageObjects/OrderCompletionPage";
import { OrderSummaryPage } from "../pageObjects/OrderSummaryPage";
import { PaymentOptionsPage } from "../pageObjects/PaymentOptionsPage";
import { RegistrationPage } from "../pageObjects/RegistrationPage";
import { SavedAddressesPage } from "../pageObjects/SavedAddressesPage";
import { SavedPaymentMethodsPage } from "../pageObjects/SavedPaymentMethodsPage";
import { SelectAddressPage } from "../pageObjects/SelectAddressPage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      //id = navbaraccount
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type('demo');
      // Set password value to "demo"
      LoginPage.passwordField.type('demo');
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      
      // Validate that "demo" account name appears in the menu section
      //button[aria-label="Go to user profile"]
      HomePage.userProfileButton.should("contain.text", 'demo');
    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.newCustomerButton.click();
      // Find - how to generate random number in JS
      const x = Math.floor(Math.random() * 10000 + 1);
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      const email = "email_" + x + "@ebox.com";
      //'email_${x}@eboc.com'
      // Save that email address to some variable
      RegistrationPage.emailField.type(email);
      // Fill in password field and repeat password field with same password
      const password = "abc123@!";
      RegistrationPage.passwordField.type(password);
      RegistrationPage.repeatPasswordField.type(password);
      // Click on Security Question menu
      RegistrationPage.securityQuestionField.click();
      // Select  "Name of your favorite pet?"
      const question = "Your favorite book?";
      RegistrationPage.securityQuestionOptionsField.contains(question).click();
      // Fill in answer
      const answer = "Garfield";
      RegistrationPage.answerField.type(answer);
      // Click Register button
      RegistrationPage.registerButton.click();

      // Set email value to previously created email
      LoginPage.emailField.type(email);
      // Set password value to previously used password value
      LoginPage.passwordField.type(password);
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.userProfileButton.should("contain.text", email);
    });
  });

  context.only("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      //since it includes other divs under it  can combine 
      HomePage.searchButton.click();
      // Search for Lemon
      HomePage.searchField.type('Lemon{enter}');
      //HomePage.searchField.type('{enter}');
      // Select a product card - Lemon Juice (500ml)
      HomePage.productBox.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.cardText.should('contain.text', 'Sour but full of vitamins.');
    });

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it("Search 500ml and validate Lemon, while having multiple cards", () => {
    // Click on search icon
    HomePage.searchButton.click();
    // Search for 500ml
    HomePage.searchField.type('500ml{enter}');
    // Select a product card - Lemon Juice (500ml)
    HomePage.productBox.contains("Lemon Juice (500ml)").click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.cardText.should('contain.text', 'Sour but full of vitamins.');
    });

    // Create scenario - 
    it("Search 500ml and validate cards", () => {
    // Click on search icon
    HomePage.searchButton.click();
    // Search for 500ml
    HomePage.searchField.type('500ml{enter}');
    // Select a product card - Eggfruit Juice (500ml)
    HomePage.productBox.contains("Eggfruit Juice (500ml)").click();
    // Validate that the card (should) contains "Now with even more exotic flavour."
    HomePage.cardText.should('contain.text', 'Now with even more exotic flavour.');
    // Close the card
    HomePage.closeButton.click();
    // Select a product card - Lemon Juice (500ml)
    HomePage.productBox.contains("Lemon Juice (500ml)").click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.cardText.should('contain.text', 'Sour but full of vitamins.');
    // Close the card
    HomePage.closeButton.click();
    // Select a product card - Strawberry Juice (500ml)
    HomePage.productBox.contains("Strawberry Juice (500ml)").click();
    // Validate that the card (should) contains "Sweet & tasty!"
    HomePage.cardText.should('contain.text', 'Sweet & tasty!');
    });

    // Create scenario - Read a review
    it("Read a review", () => {
    // Click on search icon
    HomePage.searchButton.click();
    // Search for King
    HomePage.searchField.type('King{enter}');
    // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
    HomePage.productBox.contains("OWASP Juice Shop \"King of the Hill\" Facemask").click();
    // Click expand reviews button/icon (wait for reviews to appear)
    HomePage.expandReviewsButton.click();
    // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
    HomePage.cardText.should('contain.text', 'K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!')
    });

    // Create scenario - Add a review
    it("Add a review", () => {
    // Click on search icon
    HomePage.searchButton.click();
    // Search for Raspberry
    HomePage.searchField.type('Raspberry{enter}');
    // Select a product card - Raspberry Juice (1000ml)
    HomePage.productBox.contains("Raspberry Juice (1000ml)").click();
    // Type in review - "Tastes like metal"
    HomePage.reviewField.click().type('Tastes like metal');
    // Click Submit
    HomePage.submitButton.click();
    // Click expand reviews button/icon (wait for reviews to appear)
    HomePage.expandReviewsButton.click();
    // Validate review -  "Tastes like metal"
    HomePage.cardText.should('contain.text', 'Tastes like metal')
    });

    // Create scenario - Validate product card amount
    it("Validate product card amount", () => {
    // Validate that the default amount of cards is 12
    HomePage.productAmount.should('have.length', 12);
    // Change items per page (at the bottom of page) to 24
    HomePage.itemsPerPageSelector.click();
    HomePage.select24Button.click();
    // Validate that the amount of cards is 24
    HomePage.productAmount.should('have.length', 24);
    // Change items per page (at the bottom of page) to 36
    HomePage.itemsPerPageSelector.click();
    HomePage.select36Button.click();
    // Validate that the amount of cards is 35
    HomePage.productAmount.should('have.length', 36);
    });

    // Create scenario - Buy Girlie T-shirt
    it("Buy Girlie T-shirt", () => {
    // Click on search icon
    HomePage.searchButton.click();
    // Search for Girlie
    HomePage.searchField.type('Girlie{enter}');
    // Add to basket "Girlie"
    HomePage.addToBasketButton.click();
    // Click on "Your Basket" button
    HomePage.basketButton.click();
    // Create page object - BasketPage
    // Click on "Checkout" button
    BasketPage.checkoutButton.click();
    // Create page object - SelectAddressPage
    // Select address containing "United Fakedom"
    SelectAddressPage.selectAddressRadioButton.click();
    // Click Continue button
    SelectAddressPage.continueButton.click();
    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
    DeliveryMethodPage.standartDeliveryRadioButton.click();
    // Click Continue button
    DeliveryMethodPage.continueButton.click();
    // Create page object - PaymentOptionsPage
    // Select card that ends with "5678"
    PaymentOptionsPage.selectCard.click();
    // Click Continue button
    PaymentOptionsPage.continueButton.click();
    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
    OrderSummaryPage.placeOrderButton.click();
    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"
    OrderCompletionPage.orderConformation.should('contain.text', 'Thank you for your purchase!')
    });

    // Create scenario - Add address
    it("Add address", () => {
    // Click on Account
    HomePage.accountButton.click();
    // Click on Orders & Payment
    HomePage.orderAndPaymentButton.click();
    // Click on My saved addresse
    HomePage.savedAddressesButton.click();
    // Create page object - SavedAddressesPage
    // Click on Add New Address
    SavedAddressesPage.addNewAddressButton.click();
    // Create page object - CreateAddressPage
    // Fill in the necessary information
    CreateAddressPage.countryField.click().type("Latvia");
    CreateAddressPage.nameField.click().type("Annija");
    CreateAddressPage.numberField.click().type("12345678");
    CreateAddressPage.zipCodeField.click().type("LV-3106");
    CreateAddressPage.addressField.click().type("Inzenieru iela 101");
    CreateAddressPage.cityField.click().type("Ventspils");
    // Click Submit button
    CreateAddressPage.submitButton.click();
    // Validate that previously added address is visible
    CreateAddressPage.seeAddressBox.should('contain.text', 'Latvia');
    CreateAddressPage.seeAddressBox.should('contain.text', 'Annija');
    CreateAddressPage.seeAddressBox.should('contain.text', 'LV-3106');
    CreateAddressPage.seeAddressBox.should('contain.text', 'Inzenieru iela 101');
    CreateAddressPage.seeAddressBox.should('contain.text', 'Ventspils');
    });

    // Create scenario - Add payment option
    it("Add payment option", () => {
    // Click on Account
    HomePage.accountButton.click();
    // Click on Orders & Payment
    HomePage.orderAndPaymentButton.click();
    // Click on My payment options
    HomePage.paymentsButton.click();
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    SavedPaymentMethodsPage.newCardSelect.click();
    // Fill in Name
    SavedPaymentMethodsPage.nameField.click().type('Annija');
    // Fill in Card Number
    SavedPaymentMethodsPage.cardNumberField.click().type('1234567890123456')
    // Set expiry month to 7
    SavedPaymentMethodsPage.expirySelect.select(6);
    //using select(7) shows month 8
    // Set expiry year to 2090
    SavedPaymentMethodsPage.yearSelect.select('2090');

    // Click Submit button
    SavedPaymentMethodsPage.submitButton.click();
    // Validate that the card shows up in the list
    SavedPaymentMethodsPage.cardsBox.should('contain.text', 'Annija');
    SavedPaymentMethodsPage.cardsBox.should('contain.text', '3456')
    SavedPaymentMethodsPage.cardsBox.should('contain.text', '7/2090')
  });
  });
});
