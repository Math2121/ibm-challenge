import { AbstractRepository, EntityRepository, Repository } from "typeorm";
import { Book } from "../entities/Book";

@EntityRepository(Book)
export class BooksRepository extends AbstractRepository<Book> {

    public  findSBN(sbn:number){
      const book = this.repository.findOne({where:{SBN:sbn}})
      return book
    }
}