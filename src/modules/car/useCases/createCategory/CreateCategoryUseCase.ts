// import { AppError } from "../../../../errors/AppError";
// import { ICategory } from "../../entities/Category";
// import { categorySchema } from "../../repositories/implementations/CategoriesRepository

// interface IRequest {
//     name: string;
//     description: string;
// }

// class CreateCategoryUseCase {
//     constructor(
//         private categoriesRepository: ICategoriesRepository) { }

//     async execute({ description, name }: IRequest): Promise<void> {
//         const categoriesAlreadyExists = await this.categoriesRepository.findByName(
//             name
//         );

//         if (categoriesAlreadyExists) {
//             throw new AppError("Category Already exists!");
//         }
//         this.categoriesRepository.create({ name, description });
//     }
// }

// export { CreateCategoryUseCase };
