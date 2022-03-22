import { EntityRepository, Repository } from 'typeorm';
import { Category } from 'src/categories/category.entity';

@EntityRepository(Category)
export class CategoriesRepository extends Repository<Category> {}
