import { AppError } from "../../../../errors/AppError";
import { ICategory } from "../../entities/Category";
import CategoryRepository from "../../repositories/implementations/CategoriesRepository";

class CreateCategoryUseCase {   

    async execute(categories: ICategory): Promise<ICategory> {      
        const {name} = categories;
        const categoriesAlreadyExists = await CategoryRepository.findOne(
            {name});

        if (categoriesAlreadyExists) {
            throw new AppError("Category Already exists!");
        }
        console.log("aqui existe",categoriesAlreadyExists)
        CategoryRepository.create(categories);
        console.log("aqui salvou",categoriesAlreadyExists)

    }
}

export { CreateCategoryUseCase };
