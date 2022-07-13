import BookController from "@modules/book/controllers/BookControler";
import { Router } from "express";

const bookRoutes = Router();
const bookCreateController = new BookController();
bookRoutes.post('/create',bookCreateController.store)

export {bookRoutes}

