///  <reference types = "cypress" />

import Page from "../../pageObject/toDoPage"
const neatCsv = require('neat-csv')



describe('ToDo QA/CYPRESS EXERCISE', () => {

    let table;
    before(() => {
    cy
        .fixture('testData.csv')
        .then(neatCsv) //convert vsc file into Object
        .then(data => {
        table = data;
            })

    });

    beforeEach(() => {
        cy.visit('/')    
    })



    it('I should see no ToDos', () => {
        Page.verifyNoToDoText();

    })

    it('I should be able to see a Add ToDo dialog box', () => {
        Page.addToDoDialogBox();

    })

    it('I should be able to create a ToDo', () => {
        Page.createToDoTask(table[0]['title'], 'Incomplete')

    })


    it('I should be able to see a Update ToDo dialog box', () => {
        Page.verifyUpdateTodoHeader(table[0]['title'])
    })


    it('I should be able to update a ToDo', () => {
        Page.updateToDoTask(table[0]['title'], table[1]['title'])
    })


    it('I should be deleta a ToDo', () => {
        Page.deleteTask(table[0]['title'])
    })


})