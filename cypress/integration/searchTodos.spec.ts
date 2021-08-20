/// <reference types="Cypress" />

import TodoList from '../page_objects/todoList';
import Navigation from '../page_objects/navigation';


describe('Searching by THINGS TO DO List', () => {

    let todoList = new TodoList();

    beforeEach(() => {
        todoList = Navigation.todoList();
    })

    it('should show searching by THINGS TO DO List ', () => {
        
    })

})