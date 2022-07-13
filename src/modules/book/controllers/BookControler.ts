import { Request, Response } from "express"
import {container} from 'tsyringe'
import { CreateBookService } from "../services/CreateBookService"

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
}