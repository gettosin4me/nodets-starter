import * as awilix from 'awilix';
export default class CategoryRepository {
    private readonly CategoryEntity;

    constructor({ CategoryEntity }: Record<string, any>) {
        this.CategoryEntity = CategoryEntity
    }

    async getCategories(): Promise<typeof CategoryEntity[]> {
        const { CategoryEntity } = this;

        const categories = await CategoryEntity.find();

        return categories;
    }
}