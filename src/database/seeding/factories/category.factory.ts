import Faker from "@faker-js/faker"

import { define } from 'typeorm-seeding';
import {slugify} from '../../../utils/helper';
import Category from '../../../entities/categories/category.entity';

define(Category, (faker: typeof Faker) => {
    const category  = new Category();
    const categoryName = faker.name.firstName();
    category.name   = categoryName;
    category.slug   = slugify(categoryName);
    category.icon   = faker.image.business();

    return category
  })