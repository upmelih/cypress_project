describe('empty spec', () => {
  it('passes', () => {

    const LOCATORS = {
      username :'[id="name"]',
      userlastname:'[id ="last_name"]',
      usercardnumber:'[id="card_number"]',
      useremail:'[id="email"]'
    }

    //Second user story
    // user goes to "http://qalab.pl.tivixlabs.com/?country=3&city=4&model=Toyota&pickup=2022-08-20&dropoff=2022-08-22')"
    cy.visit('http://qalab.pl.tivixlabs.com/?country=3&city=4&model=Toyota&pickup=2022-08-20&dropoff=2022-08-22')

    // user click the rent button for list number 51 
    //to Choose company:"Moore and Sons", Car Model:"Toyota Aygo"
    cy.get(':nth-child(10) > :nth-child(7) > .btn').click()

    // to verify user get the detailed information about selection
    //check the current URL is expected URL
    cy.url().should('include', '/details/51')

    //user click rent car detail page 
    cy.get('.btn').click()

    //Third user story

    //check the URL to verify user in correct page 
    cy.url().should('include', '/rent/51')
    //user provide  valid name: "Melih"
    cy.get(LOCATORS.username).type('Melih')
    //user provide valid lastname: "Seyhan"
    cy.get(LOCATORS.userlastname).type('Seyhan')
    //user provide valid card number : "87654672319"
    cy.get(LOCATORS.usercardnumber).type('87654672319')
    // user provide valid email  adress : "melihseyhan@gmail.com"
    cy.get(LOCATORS.useremail).type('melihseyhan@gmail.com')
    //user click rent button for reservertion
    //cy.get('.btn').click()
    /*
    command out last cliclking action above because,
    user got 404 status code and wont be able to proceed 
    to make a reservation

    */
    
  })
})