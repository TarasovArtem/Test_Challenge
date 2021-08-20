/// <reference types="Cypress" />

import TodoList from '../page_objects/todoList';
import Navigation from '../page_objects/navigation';
import { NameTask }  from '../page_objects/const';

describe('Add New Task to THINGS TO DO List', () => {

    let todoList = new TodoList();


    beforeEach(() => {
        todoList = Navigation.todoList();
    })

    it('should add New Task to to do list', () => {
        todoList.getItems().should(($taskItems) => {
            expect($taskItems.eq(0)).to.contain(NameTask.Javascript);
            expect($taskItems.eq(1)).to.contain(NameTask.React);
            expect($taskItems.eq(2)).to.contain(NameTask.Build);
        })
        todoList.getTodoList().within(() => {
            todoList.getAddToDo().then((someData: any) => {
                todoList.getInputAddNew()
                    .type(someData.name)
                    .type('{enter}');
            })
        })
        todoList.getItems().should(($taskItems) => {
            expect($taskItems.eq(0)).to.contain(NameTask.Javascript);
            expect($taskItems.eq(1)).to.contain(NameTask.React);
            expect($taskItems.eq(2)).to.contain(NameTask.Build);
            expect($taskItems.eq(3)).to.contain(NameTask.New);
        })
    })
})