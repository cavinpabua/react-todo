import { TodoStorage } from "../entities/todoStorage";

export interface TodoRepository {
  GetTodos(): TodoStorage[];
  AddTodo(Todo:any):any;
  DeleteTodo(id:number):any;
  MarkCompleteTodo(id:number):any;
}
