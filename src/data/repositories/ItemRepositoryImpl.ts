import { Item } from "../../domain/entities/Item";
import { ItemRepository } from "../../domain/repositories/ItemRepository";

class ItemDTO {
  name: string = "";
}
let itemArray =[
  {
    "name": "test"
  }
];
export class ItemRepositoryImpl implements ItemRepository {
  GetItems(): Item[]{
    return itemArray.map((item: ItemDTO) => new Item(item.name));
  }
  AddItem(item:any) {
    itemArray.push(item)
    return true;
  }

}
