const neatCsv = require('neat-csv')


class Page
{
    addTaskBtn ="[type='button']";
    submitTaskBtn ="[type='submit']";
    titleTextField ="#title";
    addTODOtext = "h1.modal_formTitle__3rZjc";
    statusDropDown = "#type";
    editBtn ="div.todoItem_todoActions__FoS8K div:nth-child(2) svg";
    deleteBtn ="div.todoItem_todoActions__FoS8K div:nth-child(1)";
    txtNoToDo = "No Todos";
    updateToDoHeader = "h1.modal_formTitle__3rZjc";
    updateTaskText = "p[class='todoItem_todoText__Z3V+r todoItem_todoText--completed__X-zWc']";
    successMessage = "div.go3958317564";




verifyNoToDoText(){
    cy.contains(this.txtNoToDo)
}

addToDoDialogBox(){
    cy.get(this.addTaskBtn).click()
    cy.get(this.addTODOtext).contains('Add TODO')
}



createToDoTask(titleText){
    cy.get(this.addTaskBtn).click()
    cy.get(this.titleTextField).type(titleText)
    cy.get(this.statusDropDown).select('Incomplete')
    .should('have.value','incomplete' )
    cy.get(this.submitTaskBtn).click()
    //cy.get(this.SuccessMessage).should('have.text', 'Task added successfully')
}

verifyUpdateTodoHeader(titleText){
    cy.get(this.addTaskBtn).click()
    cy.get(this.titleTextField).type(titleText)
    cy.get(this.submitTaskBtn).click()
    cy.get(this.editBtn).click()
    cy.get(this.updateToDoHeader).should('have.text', 'Update TODO')
}

updateToDoTask(titleText, updatedTitelText){
    this.createToDoTask(titleText)
    cy.get(this.editBtn).click()
    cy.get(this.titleTextField).clear().type(updatedTitelText)
    cy.get(this.statusDropDown).select('Completed').should('have.value', 'complete')
    cy.get(this.submitTaskBtn).click()
    cy.get(this.updateTaskText).should('have.text', 'Test 2 Update List')

}

deleteTask(text){
    this.createToDoTask(text)
    cy.get(this.deleteBtn).click()
   
}

}

export default new Page();