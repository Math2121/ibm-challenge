import BookController from "@modules/book/controllers/BookControler";
import { Router } from "express";
import {celebrate,Joi,Segments} from 'celebrate'


const bookRoutes = Router();
const bookCreateController = new BookController();
bookRoutes.post('/create',celebrate({
  [Segments.BODY]:{
    SBN:Joi.number().required(),
    nome:Joi.string().required(),
    descricao:Joi.string().required(),
    autor:Joi.string().required(),
    estoque: Joi.number().required().precision(1),
  }
}),bookCreateController.store)

export {bookRoutes}

