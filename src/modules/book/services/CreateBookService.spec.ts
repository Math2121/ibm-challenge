import AppError from "@shared/errors/AppError";
import { BooksRepositoryInMemory } from "../repositories/in-memory/BookRepositoryInMemory";

import { CreateBookService } from "./CreateBookService";

let createBookService: CreateBookService;
let bookRepositoryInMemory: BooksRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    bookRepositoryInMemory = new BooksRepositoryInMemory();
    createBookService = new CreateBookService(bookRepositoryInMemory);
  });

  it("should be able create a new book", async () => {
    const book  = await createBookService.execute({
      nome:"Teste",
      SBN:2555,
      autor:"Teste",
      descricao:"Teste",
      estoque:20
    })



    expect(book).toHaveProperty("nome")
  })
  
  it("shouldn´t not be able create a new book if another exists yet", async () => {
    await createBookService.execute({
      nome:"Teste",
      SBN:2555,
      autor:"Teste",
      descricao:"Teste",
      estoque:20
    })
    await expect(
      createBookService.execute({
        nome:"Teste",
        SBN:2555,
        autor:"Teste",
        descricao:"Teste",
        estoque:20
      })
    ).rejects.toEqual(new AppError("This book already exists"));

  })
});
