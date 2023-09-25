class toDoPage
{
    AddTaskBtn ="[type='button']";
    submitTaskBtn ="[type='submit']";
    titleTextField ="#title";
    addTODOtext = "h1.modal_formTitle__3rZjc";
    statusDropDown = "#type";
    editBtn ="div.todoItem_todoActions__FoS8K div:nth-child(2) svg";
    deleteBtn ="div.todoItem_todoActions__FoS8K div:nth-child(1)";
    txtNoToDo = "No Todos";
    updateToDoHeader = "h1.modal_formTitle__3rZjc";
    SuccessMessage = "div.go3958317564";


verifyNoToDoText(){
    cy.visit('/')  //open url
    cy.contains(this.txtNoToDo)
}

addToDoDialogBox(){
    cy.visit('/')  //open url
    cy.get(this.AddTaskBtn).click()
    cy.get(this.addTODOtext).contains('Add TODO')
}

createToDoTask(text, dropDownValue){
    cy.visit('/')  //open url
    cy.get(this.AddTaskBtn).click()
    cy.get(this.titleTextField).type(text)
    cy.get(this.statusDropDown).select(dropDownValue).should('hava.value', dropDownValue)
    cy.get(this.submitTaskBtn)
    cy.get(this.SuccessMessage).should('have.value', 'Task added successfully')
}

verifyUpdateTodoHeader(text){
    cy.visit('/')  //open url
    cy.get(this.AddTaskBtn).click()
    cy.get(this.titleTextField).type(text)
    cy.get(this.submitTaskBtn)
    cy.get(this.editBtn).click()
    cy.get(this.updateToDoHeader).should('have.text', 'Update TODO')
}

updateToDoTask(text, dropDownValue){
    this.createToDoTask(text, dropDownValue)
    cy.get(this.titleTextField).clear().type(text)
    cy.get(this.statusDropDown).select(dropDownValue).should('hava.value', dropDownValue)
    cy.get(this.submitTaskBtn)
}

deleteTask(){
    this.createToDoTask(text, dropDownValue)
    cy.get(this.deleteBtn).click()
    cy.get(this.SuccessMessage).should('have.value', 'Task Deleted successfully')
}

}

//module.export = new toDoPage();

export default toDoPage();