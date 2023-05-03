import dotenv from 'dotenv';

dotenv.config();

import { Factory, Seeder } from "typeorm-seeding";
import Category from "../../../entities/categories/category.entity";

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Category)().createMany(15);
  }
}