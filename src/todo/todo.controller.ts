import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Todo } from './Model/todo.model';
import { v4 as uuidv4 } from 'uuid';

@Controller('todo')
export class TodoController {
    todos: Todo[] = [];
    constructor(){
        this.todos = [new Todo('1','sport','faire du  sport')];
    }
@Get()
getToDos(@Req() request: Request): Todo[]{
    console.log(request);
    return this.todos;
}
@Post('add/')
addTodo(@Body() newTodo : Todo): Todo{let todo = new Todo();
    todo.id=uuidv4();
    todo={...todo,...newTodo}
    this.todos.push(todo);
    return todo
}
}
