import { Todo } from "../entities/todo";

export interface TodoRepository {
  GetTodos(): Todo[];
  AddTodo(Todo:any):any;
  DeleteTodo(id:number):any;
  MarkCompleteTodo(id:number):any;
}
