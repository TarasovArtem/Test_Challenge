/// <reference types="Cypress" />

import TodoList from '../page_objects/todoList';
import Navigation from '../page_objects/navigation';


describe('Add New Task to THINGS TO DO List', () => {

    let todoList = new TodoList();

    beforeEach(() => {
        todoList = Navigation.todoList();    
    })

    it('should add New Task to to do list', () => {
        todoList.getItems().should(($taskItems) => {
            expect($taskItems.eq(0)).to.contain('Learn Javascript');
            expect($taskItems.eq(1)).to.contain('Learn React');
            expect($taskItems.eq(2)).to.contain('Build a React App');    
        })   
        todoList.getTodoList().within(() => { 
            todoList.getAddToDo().then((someData) => { 
                todoList.getInputAddNew()
                    .type(someData.name)
                    .type('{enter}');
            })
        })
        todoList.getItems().should(($taskItems) => {
            expect($taskItems.eq(0)).to.contain('Learn Javascript');
            expect($taskItems.eq(1)).to.contain('Learn React');
            expect($taskItems.eq(2)).to.contain('Build a React App');
            expect($taskItems.eq(3)).to.contain('New Task');    
        })    
    })

})