import { Request, Response } from "express"
import {container} from 'tsyringe'
import { CreateBookService } from "../services/CreateBook/CreateBookService"
import { DeleteBookService } from "../services/DeleteBook/DeleteBookService";
import { GetBookByIdService } from "../services/GetBookById/GetBookService";
import { ListBookService } from "../services/ListBooks/ListBookService";
import { UpdateBookService } from "../services/UpdateBook/UpdateBookService";

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

public async getBook(request: Request,response: Response){
const {sbn} = request.params
const getBookService = container.resolve(GetBookByIdService);

const book = await getBookService.execute(sbn)
  
return response.status(200).json({
     'book':book
   });
}

public async update(request: Request,response: Response){
const {sbn} = request.params
const {nome,autor,descricao,estoque} = request.body
const bookUpdate = container.resolve(UpdateBookService);

 const result = await bookUpdate.execute({
    nome,autor,sbn:parseInt(sbn),descricao,estoque
  })
 
return response.status(200).json(result);
}

public async delete(request: Request,response: Response){
  const {sbn} = request.params
  const deleteBookService = container.resolve(DeleteBookService);

  await deleteBookService.execute(sbn)

  return response.status(204).json()
}
}