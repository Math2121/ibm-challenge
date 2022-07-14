import { IBookRepository } from "@modules/book/repositories/IBookRepository";
import {  getRepository, Repository, UpdateResult } from "typeorm";
import { Book } from "../entities/Book";
interface IUpdateData{
  nome?:string;
  autor?:string;
  descricao?:string;
  estoque?:number;
  updated_at:Date
}

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

    async list(): Promise<IPaginate> {
      const books = await this.repository.createQueryBuilder('books').select(['books.nome']).paginate() as IPaginate;
      return books

    }
    async update(sbn:number, data: Book): Promise<Book> {
 
      const updateData:IUpdateData = {
        nome: data.nome,
        autor: data.autor,
        descricao: data.descricao,
        estoque:data.estoque,
        updated_at: new Date(),
      };

      if (typeof updateData.nome === 'undefined') {
        delete updateData.nome;
      }
      if (typeof updateData.autor === 'undefined') {
        delete updateData.autor;
      }
      if (typeof updateData.descricao === 'undefined') {
        delete updateData.descricao;
      }

      if (typeof updateData.estoque === 'undefined') {
        delete updateData.estoque;
      }

    
     await this.repository.update(sbn,updateData)

    const result = this.findSBN(sbn)
    return result
    }

    
}