import { EntityRepository, Repository } from "typeorm";
import { Book } from "../entities/Book";

@EntityRepository(Book)
export class BooksRepository extends Repository<Book> {

}