import AppError from "@shared/errors/AppError";
import { getCustomRepository} from "typeorm";
import { BooksRepository } from "../../typeorm/repositories/BooksRepository";
import { inject, injectable } from "tsyringe";
import { IBookRepository } from "../../repositories/IBookRepository";
interface IRequest{
  SBN:number;
  nome:string;
  autor:string;
  descricao:string;
  estoque:number;
}
@injectable()
class CreateBookService{
  constructor(
    @inject("BookRepository")
     private bookRepository: IBookRepository
   ) {}

  public async execute({nome,autor,SBN,descricao,estoque}: IRequest){

    const bookExist =  await this.bookRepository.findSBN(SBN)
    
    if(bookExist){
        throw new AppError('This book already exists')
    }

    const book = await this.bookRepository.create({nome,autor,SBN,descricao,estoque})

    return book
  }
}

export {CreateBookService}