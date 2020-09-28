import { Todo } from "../entities/todo";

export interface TodoRepository {
  GetTodos(): any;
  AddTodo(Todo:any):any;
  DeleteTodo(id:number):any;
  MarkCompleteTodo(id:number):any;
  localStorageGet(name:string):any;
  localStorageSet(name:string, value:any):any;
}
