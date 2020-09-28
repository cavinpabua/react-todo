import { Item } from "../../domain/entities/Item";
import { ItemRepository } from "../../domain/repositories/ItemRepository";

class ItemDTO {
  name: string = "";
  id: number = 0
}
let itemArray: any[] =[];
export class ItemRepositoryImpl implements ItemRepository {
  GetItems(): Item[]{
    return itemArray.map((item: ItemDTO) => new Item(item.id,item.name));
  }
  AddItem(item:any) {
    itemArray.push(item)
    return itemArray.map((item: ItemDTO) => new Item(item.id,item.name));
  }
  DeleteItem(id: number) {
    itemArray = itemArray.filter(function(el) { return el.id !== id; });
  }
}
