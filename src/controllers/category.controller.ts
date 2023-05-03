import {Request, Response} from 'express';
import { validate } from '../middlewares/validate.middleware'
import { route, GET, POST, before } from 'awilix-express'
import ResponseTransformer from '../utils/response.transformer';

@route('/categories')
export default class UserAPI {
  constructor({  }) {
    // this.userService = userService
  }

  @GET()
//   @before([validate()])
  async getCategory(req: Request, res: Response) {
    ResponseTransformer.success({res, data: {}});
    // res.send(await this.userService.get(req.params.id))
  }

  @POST()
  async createUser(req: Request, res: Response) {
    // res.send(await this.userService.create(req.body))
  }
}