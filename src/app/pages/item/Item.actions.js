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


export const addList = async (dispatch,item) =>{
  dispatch({ type: LIST_LOAD_REQUEST });
  const itemRepo = new ItemRepositoryImpl();
  const itemService = new ItemServiceImpl(itemRepo);
  let params = {
    "name": item
  }
  try {
    await itemService.AddItem(params);
    const items = await itemService.GetItems();

    dispatch({type: LIST_LOAD_SUCCESS, payload: items});
  } catch (error) {
    dispatch({ type: LIST_LOAD_FAILURE, error });
  }
}