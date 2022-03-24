import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesRepository } from './categories.repository';
import { UpdateCategoryDto } from './dto/updateCategory.dto';
import { CategoryNotFoundException } from './exception/categoryNotFound.exceptions';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(CategoriesRepository)
        private readonly categoriesRepository: CategoriesRepository,
    ) {}

    getAllCategories() {
        return this.categoriesRepository.find({ relations: ['posts'] });
    }

    async getCategoryById(id: string) {
        const category = await this.categoriesRepository.findOne(id, {
            relations: ['posts'],
        });
        if (category) {
            return category;
        }
        throw new CategoryNotFoundException(id);
    }

    async updateCategory(id: string, category: UpdateCategoryDto) {
        await this.categoriesRepository.update(id, category);
        const updatedCategory = await this.categoriesRepository.findOne(id, {
            relations: ['posts'],
        });
        if (updatedCategory) {
            return updatedCategory;
        }
        throw new CategoryNotFoundException(id);
    }
}
