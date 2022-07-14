import { ICreateBookDTO } from "../dto/CreateBookDTO"
import { Book } from "../typeorm/entities/Book"
interface IPaginate{
  from:number
  to:number
  per_page:number
  total:number
  current_page:number
  prev_page:number
  next_page:number
  data:Book[];

}
interface IUpdateData{
  nome?:string;
  autor?:string;
  descricao?:string;
  estoque?:number;
}
interface IBookRepository{
  create(data:ICreateBookDTO):Promise<Book>
  findSBN(sbn:number):Promise<Book>
  list():Promise<IPaginate>
  update(sbn:number, data:IUpdateData):Promise<Book>
  delete(sbn:number):Promise<void>
}
export {IBookRepository}