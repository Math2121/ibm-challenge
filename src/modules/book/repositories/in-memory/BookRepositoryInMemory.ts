import { IBookRepository } from "@modules/book/repositories/IBookRepository";
import { Book } from "@modules/book/typeorm/entities/Book";

interface IData{
  SBN:number;
  nome:string;
  autor:string;
  descricao:string;
  estoque:number;
}
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
  updated_at:Date
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

    async list(): Promise<IPaginate> {
      return {
        from: 1,
        to: 1,
        per_page:1,
        total:1,
        current_page:1,
        prev_page:1,
        next_page:1,
        data: this.book
      }
    }
    async update(sbn: number, data: IUpdateData): Promise<Book> {

      const book = this.book.filter(book => book.SBN === sbn);

      const newBook = book.map((item:Book) => {
if(data.autor !== undefined){
  item.autor = data.autor;
}
if(data.nome !== undefined){
  item.nome = data.nome;
}
if(data.descricao !== undefined){
  item.descricao = data.descricao;
}
if(data.estoque !== undefined){
  item.estoque = data.estoque;
}

return item
      })

      return newBook[0]
  
    }
}