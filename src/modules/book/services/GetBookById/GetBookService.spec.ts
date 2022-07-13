import { BooksRepositoryInMemory } from "../../repositories/in-memory/BookRepositoryInMemory";
import { CreateBookService } from "../CreateBook/CreateBookService";

import { GetBookByIdService } from "./GetBookService";

let getBookService: GetBookByIdService;
let bookRepositoryInMemory: BooksRepositoryInMemory;
let createBookService: CreateBookService;

describe("Get a specific Book", () => {
  beforeEach(() => {
    bookRepositoryInMemory = new BooksRepositoryInMemory();
    getBookService = new GetBookByIdService(bookRepositoryInMemory);
    createBookService = new CreateBookService(bookRepositoryInMemory)
  });

  it("should be able get a specific book by SBN code", async () => {
    const book = await createBookService.execute({
      nome:"Teste",
      SBN:2555,
      autor:"Teste",
      descricao:"Teste",
      estoque:20
    })
    const getBook  = await getBookService.execute(String(book.SBN))
   expect(getBook).toHaveProperty('SBN')
   expect(getBook.nome).toEqual('Teste')
  })
  
  
});
