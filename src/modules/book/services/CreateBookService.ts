import AppError from "@shared/errors/AppError";
import { getCustomRepository} from "typeorm";
import { BooksRepository } from "../typeorm/repositories/BooksRepository";

interface IRequest{
  SBN:number;
  name:string;
  autor:string;
  descricao:string;
  estoque:number;
}
class CreateBookService{
 
  public async execute({name,autor,SBN,descricao,estoque}: IRequest){
const bookRepository = getCustomRepository(BooksRepository)

const bookExist =  await bookRepository.findSBN(SBN)
console.log(bookExist)

  }
}

export {CreateBookService}