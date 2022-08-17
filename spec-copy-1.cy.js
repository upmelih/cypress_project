describe('empty spec', () => {
  it('passes', () => {

    // user goes to "http://qalab.pl.tivixlabs.com/?country=3&city=4&model=Toyota&pickup=2022-08-20&dropoff=2022-08-22')"
    cy.visit('http://qalab.pl.tivixlabs.com/?country=3&city=4&model=Toyota&pickup=2022-08-20&dropoff=2022-08-22')

    // user click the rent button for list number 51 
    //to Choose company:"Moore and Sons", Car Model:"Toyota Aygo"
    cy.get(':nth-child(10) > :nth-child(7) > .btn').click()

    // to verify user get the detailed information about selection
    //check the current URL is expected URL
    cy.url().should('include', '/details/51')
  })
})