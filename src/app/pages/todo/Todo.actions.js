import {
  LIST_LOAD_REQUEST,
  LIST_LOAD_SUCCESS,
  LIST_LOAD_FAILURE,
} from "./Todo.types";
import { TodoServiceImpl } from "../../../domain/usecases/TodoService";
import { TodoRepositoryImpl } from "../../../data/repositories/TodoRepositoryStorageImpl";

export const refreshList = async (dispatch) => {
  dispatch({ type: LIST_LOAD_REQUEST });

  try {
    const todoRepo = new TodoRepositoryImpl();
    const itemService = new TodoServiceImpl(todoRepo);
    const items = await itemService.GetTodos();
    dispatch({ type: LIST_LOAD_SUCCESS, payload: items });
  } catch (error) {
    dispatch({ type: LIST_LOAD_FAILURE, error });
  }
};

export const addList = async (payload) => {
  const todoRepo = new TodoRepositoryImpl();
  const itemService = new TodoServiceImpl(todoRepo);
  const item = payload.text;
  const items = await itemService.GetTodos();
  let new_id = 1;
  try {
    new_id =
      Math.max.apply(
        Math,
        items.map(function (o) {
          return o.id;
        })
      ) + 1;
    if (new_id === -Infinity) {
      new_id = 1;
    }
  } catch (e) {}

  let params = {
    id: new_id,
    name: item,
  };
  await itemService.AddTodo(params);
  return { type: LIST_LOAD_SUCCESS, id: new_id, payload };
};

export const deleteTodo = async (id) => {
  try {
    const todoRepo = new TodoRepositoryImpl();
    const todoService = new TodoServiceImpl(todoRepo);
    await todoService.DeleteTodo(id);
  } catch (error) {
    alert(error);
  }
};

export const MarkCompleteItem = async (id) => {
  try {
    const todoRepo = new TodoRepositoryImpl();
    const todoService = new TodoServiceImpl(todoRepo);
    await todoService.MarkCompleteTodo(id);
  } catch (error) {
    alert(error);
  }
};
