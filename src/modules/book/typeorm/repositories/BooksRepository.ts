import { IBookRepository } from "@modules/book/repositories/IBookRepository";
import {  getRepository, Repository } from "typeorm";
import { Book } from "../entities/Book";
interface IData{
  SBN:number;
  nome:string;
  autor:string;
  descricao:string;
  estoque:number;
}

export class BooksRepository implements IBookRepository{
  private repository: Repository<Book>;
  constructor() {
    this.repository = getRepository(Book);
  }
     async findSBN(sbn:number):Promise<Book>{
      const book:any = await this.repository.findOne({where:{SBN:sbn}})
      return book;
    }

     async create({SBN,nome,autor,descricao,estoque}:IData){
      const book = this.repository.create({
        SBN,nome,autor,descricao,estoque
      })
      await this.repository.save(book);

      return book;
    }
}