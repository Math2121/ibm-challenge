import { Request, Response } from "express"
import { CreateBookService } from "../services/CreateBookService"

export default class BookController{
public async store(request: Request,response: Response){
   const {name,autor,SBN,descricao,estoque} = request.body
   const bookService = new CreateBookService()

  const book = await bookService.execute({
    name,autor,SBN,descricao,estoque
   })
 
console.log(book)
  return response.status(204).json();
}
}