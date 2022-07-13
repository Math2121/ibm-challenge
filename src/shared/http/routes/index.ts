import {Router} from 'express'
import { bookRoutes } from './book.routes'


const routes = Router()

routes.use('/books',bookRoutes)
routes.get('/',(req, res) => {
  console.log('oi')
})
export default routes
