import AppError from "@shared/errors/AppError";
import { BooksRepositoryInMemory } from "../../repositories/in-memory/BookRepositoryInMemory";
import { CreateBookService } from "../CreateBook/CreateBookService";
import { UpdateBookService } from "./UpdateBookService";


let updateBookService: UpdateBookService;
let bookRepositoryInMemory: BooksRepositoryInMemory;
let createBookService: CreateBookService;
describe("Update a book", () => {
  beforeEach(() => {
    bookRepositoryInMemory = new BooksRepositoryInMemory();
    updateBookService = new UpdateBookService(bookRepositoryInMemory);
    createBookService = new CreateBookService(bookRepositoryInMemory)
  });

  it("should be able update a book", async () => {
    const book = await createBookService.execute({
      nome:"Teste",
      SBN:2555,
      autor:"Teste",
      descricao:"Teste",
      estoque:20
    })

    const result = await updateBookService.execute({sbn:book.SBN,nome:"Teste2"})

    expect(result.nome).toEqual("Teste2")
  })
  
  it("should not be able update a book without a unexpected SBN code", async () => {
    await createBookService.execute({
      nome:"Teste",
      SBN:2555,
      autor:"Teste",
      descricao:"Teste",
      estoque:20
    })

    await expect(
       updateBookService.execute({sbn:0,nome:"Teste2"})
    ).rejects.toEqual(new AppError('This book not exists'));
  })
});
