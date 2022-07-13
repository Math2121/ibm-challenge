import { BooksRepositoryInMemory } from "../../repositories/in-memory/BookRepositoryInMemory";
import { CreateBookService } from "../CreateBook/CreateBookService";
import { ListBookService } from "./ListBookService";


let listBookService: ListBookService;
let bookRepositoryInMemory: BooksRepositoryInMemory;
let createBookService: CreateBookService;
describe("List all Books", () => {
  beforeEach(() => {
    bookRepositoryInMemory = new BooksRepositoryInMemory();
    listBookService = new ListBookService(bookRepositoryInMemory);
    createBookService = new CreateBookService(bookRepositoryInMemory);
  });

  it("should be able list all books", async () => {
    await createBookService.execute({
      nome:"Teste",
      SBN:2555,
      autor:"Teste",
      descricao:"Teste",
      estoque:20
    })
    const book  = await listBookService.execute()
    expect(book.data).not.toBeNull();
    expect(book.data).toHaveLength(1);
    expect(book.data[0].nome).toContain("Teste");
  })
  

});
