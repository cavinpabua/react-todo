export class Item {
  name: string;
  id: number;
  is_complete: boolean;

  constructor(id:number, name: string, is_complete: boolean) {
    this.name = name;
    this.id = id;
    this.is_complete=is_complete;
  }
}
