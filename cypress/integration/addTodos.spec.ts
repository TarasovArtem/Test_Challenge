/// <reference types="Cypress" />

import { TodoList, Navigation, NameTask }  from '../page_objects/index';

describe('Add New Task to THINGS TO DO List', () => {

    let todoList = new TodoList();

    beforeEach(() => {
        todoList = Navigation.todoList();
    })

    it('should add New Task to THINGS TO DO list', () => {
        todoList.getItems().should(($taskItems) => {
            expect($taskItems).to.contain(NameTask.Javascript);
            expect($taskItems).to.contain(NameTask.React);
            expect($taskItems).to.contain(NameTask.Build);
        })
        todoList.getTodoList().within(() => {
            todoList.getAddToDo().then((someData: any) => {
                todoList.getInputAddNew()
                    .type(someData.name)
                    .should('have.value', NameTask.New)
                    .type('{enter}');
            })
        })

        todoList.getItems().should(($taskItems) => {
            expect($taskItems).to.contain(NameTask.Javascript);
            expect($taskItems).to.contain(NameTask.React);
            expect($taskItems).to.contain(NameTask.Build);
            expect($taskItems).to.contain(NameTask.New);
        })
    })
})