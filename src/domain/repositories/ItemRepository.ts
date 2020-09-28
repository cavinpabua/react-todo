import { Item } from "../entities/Item";

export interface ItemRepository {
  GetItems(): Item[];
  AddItem(item:any):any;
  DeleteItem(id:number):any;
  MarkCompleteItem(id:number):any;
}
