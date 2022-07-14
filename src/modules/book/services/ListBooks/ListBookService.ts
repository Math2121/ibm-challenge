import AppError from "@shared/errors/AppError";
import { getCustomRepository} from "typeorm";
import { BooksRepository } from "../../typeorm/repositories/BooksRepository";
import { inject, injectable } from "tsyringe";
import { IBookRepository } from "../../repositories/IBookRepository";

@injectable()
class ListBookService{
  constructor(
    @inject("BookRepository")
     private bookRepository: IBookRepository
   ) {}

  public async execute(){

    const bookExist =  await this.bookRepository.list()
    
    return bookExist
  }
}

export {ListBookService}