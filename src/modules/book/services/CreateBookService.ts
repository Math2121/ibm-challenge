import { getRepository, Repository } from "typeorm";
import { Book } from "../typeorm/entities/Book";

interface IRequest{
  SBN:number;
  name:string;
  autor:string;
  descricao:string;
  estoque:number;
}
class CreateBookService{
  private repository: Repository<Book>;
  constructor() {
    this.repository = getRepository(Book);
  }
  public async execute({name,autor,SBN,descricao,estoque}: IRequest){
const bookExists = await this.repository.
  }
}