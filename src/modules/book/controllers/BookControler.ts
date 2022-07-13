import { Request, Response } from "express"
import {container} from 'tsyringe'
import { CreateBookService } from "../services/CreateBook/CreateBookService"
import { ListBookService } from "../services/ListBooks/ListBookService";

export default class BookController{
public async store(request: Request,response: Response){
   const {nome,autor,SBN,descricao,estoque} = request.body

   const createBokService = container.resolve(CreateBookService);

  const book = await createBokService.execute({
    nome,autor,SBN,descricao,estoque
   })
 
  return response.status(201).json({
    'book':book
  });
}

public async index(request: Request,response: Response){

  const listBookService = container.resolve(ListBookService);

const books = await listBookService.execute()

 return response.status(202).json({
   'books':books
 });
}
}