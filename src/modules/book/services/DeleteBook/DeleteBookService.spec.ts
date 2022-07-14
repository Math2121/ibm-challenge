import AppError from "@shared/errors/AppError";
import { BooksRepositoryInMemory } from "../../repositories/in-memory/BookRepositoryInMemory";
import { CreateBookService } from "../CreateBook/CreateBookService";
import { DeleteBookService } from "./DeleteBookService";



let deleteBookService: DeleteBookService;
let bookRepositoryInMemory: BooksRepositoryInMemory;
let createBookService: CreateBookService;
describe("Delete a book", () => {
  beforeEach(() => {
    bookRepositoryInMemory = new BooksRepositoryInMemory();
    deleteBookService = new DeleteBookService(bookRepositoryInMemory);
    createBookService = new CreateBookService(bookRepositoryInMemory)
  });

  it("should be able delete a book", async () => {
    const book = await createBookService.execute({
      nome:"Teste",
      SBN:2555,
      autor:"Teste",
      descricao:"Teste",
      estoque:20
    })

    await deleteBookService.execute(String(book.SBN))
    const result = await bookRepositoryInMemory.list()
    expect(result.data).toEqual([])


   
  })
  it("should not be able delete a book with a unexpected SBN code", async () => {
   
    await expect(
      deleteBookService.execute('000')
    ).rejects.toEqual(new AppError('This book not exists'));
  })
  
  
});
