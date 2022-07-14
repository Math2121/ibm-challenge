import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IBookRepository } from "../../repositories/IBookRepository";

@injectable()
class DeleteBookService{
  constructor(
    @inject("BookRepository")
     private bookRepository: IBookRepository
   ) {}

  public async execute(sbn:string){

    const bookExist =  await this.bookRepository.findSBN(parseInt(sbn))
    
    if(!bookExist){
        throw new AppError('This book not exists')
    }

    await this.bookRepository.delete(parseInt(sbn))
  }
}

export {DeleteBookService}