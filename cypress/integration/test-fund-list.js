/// <reference types="cypress" />

describe('Test Fund list web app', () => {
  it('test homepage routing', () => {
    cy.visit('http://localhost:8080/')
    cy.get('tr td:nth-child(2)')
  })

  it('test select filter button and get data-list', () => {
    cy.contains('1D').click()
    cy.get('tr td:nth-child(2)')
    cy.contains('1W').click()
    cy.get('tr td:nth-child(2)')
    cy.contains('1M').click()
    cy.get('tr td:nth-child(2)')
    cy.contains('1Y').click()
    cy.get('tr td:nth-child(2)')
  })

  it('test api and get data-list', () => {
    cy.request('/get-funds-by-range?period=1D')
    cy.get('tr td:nth-child(2)')
    cy.request('/get-funds-by-range?period=1W')
    cy.get('tr td:nth-child(2)')
    cy.request('/get-funds-by-range?period=1M')
    cy.get('tr td:nth-child(2)')
    cy.request('/get-funds-by-range?period=1Y')
    cy.get('tr td:nth-child(2)')
  })
})
