import { IBookRepository } from "@modules/book/repositories/IBookRepository";
import { Book } from "@modules/book/typeorm/entities/Book";

interface IData{
  SBN:number;
  nome:string;
  autor:string;
  descricao:string;
  estoque:number;
}

export class BooksRepositoryInMemory implements IBookRepository{
  book: Book[] = [];
     async findSBN(sbn:number):Promise<Book>{
     return this.book.find(book => book.SBN === sbn) as Book;
   
    }

     async create({SBN,nome,autor,descricao,estoque}:IData){
      const book = new Book();

    Object.assign(book, {
      SBN,nome,autor,descricao,estoque
    });
    this.book.push(book);

    return book;
    }
}