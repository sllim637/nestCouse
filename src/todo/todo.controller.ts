import { Controller, Get, Req } from '@nestjs/common';
import { Todo } from './Model/todo.model';

@Controller('todo')
export class TodoController {
    todos: Todo[] = [];
    constructor(){
        this.todos = [new Todo(1,'sport','faire du  sport')];
    }
@Get()
getToDos(@Req() request: Request): Todo[]{
    console.log(request);
    return this.todos;
}
}
