import { ICreateBookDTO } from "../dto/CreateBookDTO"
import { Book } from "../typeorm/entities/Book"

interface IBookRepository{
  create(data:ICreateBookDTO):Promise<Book>
  findSBN(sbn:number):Promise<Book>
}
export {IBookRepository}