import {
  LIST_LOAD_REQUEST,
  LIST_LOAD_SUCCESS,
  LIST_LOAD_FAILURE,
} from "./Item.types";
import { ItemServiceImpl } from "../../../domain/usecases/ItemService";
import { ItemRepositoryImpl } from "../../../data/repositories/ItemRepositoryImpl";

export const refreshList = async (dispatch) => {
  dispatch({ type: LIST_LOAD_REQUEST });

  try {
    const itemRepo = new ItemRepositoryImpl();
    const itemService = new ItemServiceImpl(itemRepo);
    const items = await itemService.GetItems();
    dispatch({ type: LIST_LOAD_SUCCESS, payload: items });
  } catch (error) {
    dispatch({ type: LIST_LOAD_FAILURE, error });
  }
};

export const addList = async payload => {
  const itemRepo = new ItemRepositoryImpl();
  const itemService = new ItemServiceImpl(itemRepo);
  const item = payload.text
  if (item !== "") {
    const items = await itemService.GetItems();
    let new_id = 1;
    try{
      new_id = Math.max.apply(Math, items.map(function(o) { return o.id; })) + 1
      if (new_id === -Infinity) {
        new_id = 1
      }
    }catch (e){}

    let params = {
      id: new_id,
      name: item,
    };
    await itemService.AddItem(params);
    return { type: LIST_LOAD_SUCCESS, id: new_id, payload }
  }
};


export const deleteTodo = async id => {
  try {
    const itemRepo = new ItemRepositoryImpl()
    const todoService = new ItemServiceImpl(itemRepo)
    await todoService.DeleteTodo(id)
  } catch (error) {
    alert(error)
  }
}