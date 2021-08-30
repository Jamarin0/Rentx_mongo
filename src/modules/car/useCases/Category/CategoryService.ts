import { categoryModel, ICategory } from "../../entities/Category";

interface ICategoryService {
    create(categories: ICategory): Promise<ICategory>;
    findByName(name: string): Promise<ICategory>;
    list(): Promise<ICategory[]>;
    delete(name: string): Promise<any>;
}


class CategoryService implements ICategoryService {

    async create({ name, description }: ICategory): Promise<ICategory> {
        return categoryModel.create({ name, description });
    }
    async findByName(name: string): Promise<ICategory> {
        return categoryModel.findOne({ name });
    }
    async list(): Promise<ICategory[]> {
        return categoryModel.find();
    }
    // async findById(CategoryId: string): Promise<void> {
    //    const category = await categoryModel.findById(CategoryId)
    // category.description
    // }
    async delete(name: string): Promise<any> {
        const deleteCategory = await categoryModel.findOneAndDelete({ name });
         return deleteCategory;
    }
}

export default new CategoryService();
