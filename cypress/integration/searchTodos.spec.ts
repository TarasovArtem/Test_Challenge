/// <reference types="Cypress" />

import { TodoList, Navigation, NameTask }  from '../page_objects/index';

describe('Searching by THINGS TO DO List', () => {

    let todoList = new TodoList();

    beforeEach(() => {
        todoList = Navigation.todoList();
    })

    it('should show searching by THINGS TO DO List ', () => {
        
    })

})