import { Item } from "../../domain/entities/Item";
import { ItemRepository } from "../../domain/repositories/ItemRepository";

class ItemDTO {
  name: string = "";
  id: number = 0;
  is_complete = false;
}
let itemArray: any[] =[];
export class ItemRepositoryImpl implements ItemRepository {
  GetItems(): Item[]{
    return itemArray.map((item: ItemDTO) => new Item(item.id,item.name,item.is_complete));
  }
  AddItem(item:any) {
    itemArray.push(item)
    return itemArray.map((item: ItemDTO) => new Item(item.id,item.name,item.is_complete));
  }
  DeleteItem(id: number) {
    itemArray = itemArray.filter(function(el) { return el.id !== id; });
  }
  MarkCompleteItem(id: number) {
    let toUpdate = itemArray.findIndex((obj => obj.id === id));
    if (!itemArray[toUpdate].is_complete) {
      itemArray[toUpdate].name = itemArray[toUpdate].name+" ✓"
      itemArray[toUpdate].is_complete = true;
    }
  }
}
