export interface IModel<T> {
  create(obj:T):Promise<T>,
  find(q:any):Promise<any[] | null>
  read():Promise<T[]>,
  createIndex(obj:any):Promise<void | null>
  readOne(_id:string):Promise<T | null>,
  update(_id:string, obj:T):Promise<T | null>,
  delete(_id:string):Promise<T | null>
}