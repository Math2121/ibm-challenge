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

bookRoutes.get('/',bookCreateController.index)

bookRoutes.get('/:sbn',celebrate({
  [Segments.PARAMS]:{sbn:Joi.number().required(),
  }
}),bookCreateController.getBook)

bookRoutes.delete('/:sbn',celebrate({
  [Segments.PARAMS]:{sbn:Joi.number().required(),
  }
}),bookCreateController.delete)

bookRoutes.put('/:sbn',celebrate({
  [Segments.BODY]:{
    nome:Joi.string(),
    descricao:Joi.string(),
    autor:Joi.string(),
    estoque: Joi.number().precision(1),
  },
  [Segments.PARAMS]:{sbn:Joi.number().required()}
}),bookCreateController.update)
export {bookRoutes}

