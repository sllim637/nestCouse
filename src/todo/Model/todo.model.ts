import { TodoStatusEnum } from "src/todo/enums/todi-status.enum";

export class Todo {

    constructor(
        public id: string = '0',
        public name: string = '',
        public description: string = '',
        public createdAt: Date= new Date(),
        public status: TodoStatusEnum = TodoStatusEnum.waiting
        ){

    }
}