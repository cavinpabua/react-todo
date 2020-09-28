export class Todo {
  name: string;
  id: number;
  isComplete: boolean;

  constructor(id:number, name: string, isComplete: boolean) {
    this.name = name;
    this.id = id;
    this.isComplete=isComplete;
  }
}
