import { TEST_ADDRESS_NEVER_USE_SHORTENED } from '../support/commands'

describe('Landing Page', () => {
  beforeEach(() => cy.visit('/swap'))
  it('loads swap page', () => {
    cy.get('#swap-page')
  })

  it('redirects to url /swap', () => {
    cy.url().should('include', '/swap')
  })

  it('allows navigation to liquidity', () => {
    cy.get('#pool-nav-link').click()
    cy.url().should('include', '/liquidity')
  })

  // Wallet not connected - test will not pass.
  // it('is connected', () => {
  //   cy.get('#web3-status-connected').click()
  //   cy.get('#web3-account-identifier-row').contains(TEST_ADDRESS_NEVER_USE_SHORTENED)
  // })
})
