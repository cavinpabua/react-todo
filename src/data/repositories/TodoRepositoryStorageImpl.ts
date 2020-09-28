import { Todo } from "../../domain/entities/todo";
import { TodoRepository } from "../../domain/repositories/TodoRepository";
class TodoDTO {
  name: string = "";
  id: number = 0;
  isComplete = false;
}

const STORAGE_NAME = "Todos";

export class TodoRepositoryImpl implements TodoRepository {
  localStorageGet(name: string) {
    let item= localStorage.getItem(name);
    if (item !== null){
      return item
    }
    return  "{}"
  }
  localStorageSet(name: string, value:any) {
    localStorage.setItem(name, value);
  }
  isEmpty(obj: {}) {
    return Object.keys(obj).length === 0;
  }

  GetTodos(): any{
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    let itemArray = JSON.parse(<string>this.localStorageGet(STORAGE_NAME))
    if (!this.isEmpty(itemArray)) {
      return itemArray.obj.map((item: TodoDTO) => new Todo(item.id,item.name,item.isComplete));
    }

  }

  AddTodo(item:any) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    let itemArray = JSON.parse(<string>this.localStorageGet(STORAGE_NAME))
    if (!this.isEmpty(itemArray)) {
      itemArray.obj.push(item)
      this.localStorageSet(STORAGE_NAME,JSON.stringify(itemArray))
    } else {
      itemArray = {
        "obj": []
      }
      itemArray.obj.push(item)
      this.localStorageSet(STORAGE_NAME,JSON.stringify(itemArray))
    }

    return itemArray['obj'].map((item: TodoDTO) => new Todo(item.id,item.name,item.isComplete));
  }

  DeleteTodo(id: number) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    let itemArray = JSON.parse(<string>this.localStorageGet(STORAGE_NAME))
    itemArray.obj= itemArray.obj.filter(function(el: { isComplete: Boolean;id: number; }) { return el.id !== id || el.isComplete; });
    this.localStorageSet(STORAGE_NAME,JSON.stringify(itemArray))
  }

  MarkCompleteTodo(id: number) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    let itemArray = JSON.parse(<string>this.localStorageGet(STORAGE_NAME))
    let toUpdate = itemArray.obj.findIndex(((obj: { id: number; }) => obj.id === id));
    if (!itemArray.obj[toUpdate].isComplete) {
      itemArray.obj[toUpdate].name = itemArray.obj[toUpdate].name+" ✓"
      itemArray.obj[toUpdate].isComplete = true;
    }
    this.localStorageSet(STORAGE_NAME,JSON.stringify(itemArray))
  }
}
