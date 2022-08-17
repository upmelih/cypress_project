describe('empty spec', () => {
  it('passes', () => {


    const LOCATORS = {
      country :'[id="country"]',
      city:'[id ="city"]',
      model:'[id="model"]',
      pickupdate:'[id="pickup"]',
      dropoffdate:'[id="dropoff"]'
    }

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
    //user enter dropoff date as "2022-08-22"
    cy.get(LOCATORS.dropoffdate).type('2022-08-22')

    
    // user click serach button
    cy.get('#search_form > .btn').click()


    cy.get('thead > tr > :nth-child(7)').should('have.text', 'Action')



  })
})