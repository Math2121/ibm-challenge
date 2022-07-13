import { container } from "tsyringe";
import { IBookRepository } from "@modules/book/repositories/IBookRepository";
import { BooksRepository } from "@modules/book/typeorm/repositories/BooksRepository";



container.registerSingleton<IBookRepository>(
  "BookRepository",
  BooksRepository
);

