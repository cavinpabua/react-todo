import { Todo } from "../entities/todo";
import { TodoRepository } from "../repositories/TodoRepository";

export interface TodoService {
  GetTodos(): Promise<Todo[]>;
}

export class TodoServiceImpl implements TodoService {
  itemRepo: TodoRepository;

  constructor(ir: TodoRepository) {
    this.itemRepo = ir;
  }

  async GetTodos(): Promise<Todo[]> {
    return this.itemRepo.GetTodos();
  }

  AddTodo(item:any) {
    return this.itemRepo.AddTodo(item);
  }

  DeleteTodo(id:number) {
    return this.itemRepo.DeleteTodo(id);
  }
  MarkCompleteTodo(id:number) {
    return this.itemRepo.MarkCompleteTodo(id);
  }
}
