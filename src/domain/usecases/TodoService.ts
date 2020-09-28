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

  AddTodo(item:Todo) {
    if (item.name.length > 0)
    return this.itemRepo.AddTodo(item);
  }

  DeleteTodo(item:Todo) {
    if (!item.isComplete)
    return this.itemRepo.DeleteTodo(item.id);
  }
  MarkCompleteTodo(id:number) {
    return this.itemRepo.MarkCompleteTodo(id);
  }
}
