import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IBookRepository } from "../../repositories/IBookRepository";
interface IRequest{
  sbn:number;
  nome?:string;
  autor?:string;
  descricao?:string;
  estoque?:number;
}
@injectable()
class UpdateBookService{
  constructor(
    @inject("BookRepository")
     private bookRepository: IBookRepository
   ) {}

  public async execute({nome,autor,sbn,descricao,estoque}: IRequest){
    const book =  await this.bookRepository.findSBN(sbn)

    if(!book){
      throw new AppError('This book not exists')
    }
    const result =  await this.bookRepository.update(sbn,{nome,autor,descricao,estoque})
    
    return result
  }
}

export {UpdateBookService}