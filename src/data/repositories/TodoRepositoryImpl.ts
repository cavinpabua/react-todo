import { Todo } from "../../domain/entities/todo";
import { TodoRepository } from "../../domain/repositories/TodoRepository";

class TodoDTO {
  name: string = "";
  id: number = 0;
  isComplete = false;
}
let itemArray: any[] =[];
export class TodoRepositoryImpl implements TodoRepository {

  GetTodos(): Todo[]{
    return itemArray.map((item: TodoDTO) => new Todo(item.id,item.name,item.isComplete));
  }
  AddTodo(item:any) {
    itemArray.push(item)
    return itemArray.map((item: TodoDTO) => new Todo(item.id,item.name,item.isComplete));
  }
  DeleteTodo(id: number) {
    itemArray = itemArray.filter(function(el) { return el.id !== id || el.isComplete;});
  }
  MarkCompleteTodo(id: number) {
    let toUpdate = itemArray.findIndex((obj => obj.id === id));
    if (!itemArray[toUpdate].isComplete) {
      itemArray[toUpdate].name = itemArray[toUpdate].name+" ✓"
      itemArray[toUpdate].isComplete = true;
    }
  }

  localStorageGet(name: string): any {
  }

  localStorageSet(name: string, value: any): any {
  }
}
