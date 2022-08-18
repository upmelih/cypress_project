describe('empty spec', () => {
  it('passes', () => {


    const LOCATORS = {
      country :'[id="country"]',
      city:'[id ="city"]',
      model:'[id="model"]',
      pickupdate:'[id="pickup"]',
      dropoffdate:'[id="dropoff"]'
    }


    // Forth user story
    //user goes to "http://qalab.pl.tivixlabs.com/"
    cy.visit('http://qalab.pl.tivixlabs.com/')


    // user select Caountry as France
    cy.get(LOCATORS.country).select('France').should('have.value', '3')
    //user select City as Paris
    cy.get(LOCATORS.city).select('Paris').should('have.value','4')
    //user select model as Toyota
    cy.get(LOCATORS.model).type('Toyota')
    //user enter pickup date as "2022-08-20"
    cy.get(LOCATORS.pickupdate).type('2022-08-20')
    //user enter dropoff date as "2022-08-08" 
    //made mistake of selecting  dropoff date before pickupdate
    cy.get(LOCATORS.dropoffdate).type('2022-08-08')

    // user click serach button
    cy.get('#search_form > .btn').click()
    
    //user wont be able to see list of rental car
    // to verify that ,check the text is "Please enter a valid date!"
    cy.get('.alert').should('have.text', 'Please enter a valid date!')

  })
})