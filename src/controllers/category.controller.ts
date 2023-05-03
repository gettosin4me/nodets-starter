import * as awilix from 'awilix';
import {Request, Response} from 'express';
import { validate } from '../middlewares/validate.middleware'
import { route, GET, POST, before } from 'awilix-express'
import ResponseTransformer from '../utils/response.transformer';

@route('/categories')
export default class CategoryController {
  private readonly CategoryRepository;

  constructor({ CategoryRepository }: Record<string, any>) {
    this.CategoryRepository = CategoryRepository
  }

  @GET()
//   @before([validate()])
  async getCategories(req: Request, res: Response) {
    const { CategoryRepository } = this;
    const data = await CategoryRepository.getCategories();
    ResponseTransformer.success({res, data});
    // res.send(await this.userService.get(req.params.id))
  }

  @POST()
  async createUser(req: Request, res: Response) {
    // res.send(await this.userService.create(req.body))
  }
}