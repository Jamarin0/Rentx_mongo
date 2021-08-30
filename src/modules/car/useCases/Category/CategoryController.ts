import { Response, Request } from "express";
import { AppError } from "../../../../errors/AppError";
import CategoryService from "./CategoryService";


interface ICategoryController {
    create(request: Request, response: Response, next: Function): Promise<Response>;
    list(request: Request, response: Response, next: Function): Promise<Response>;
    // update(request: Request, response: Response, next: Function): Promise<void>;
    delete(request: Request, response: Response, next: Function): Promise<void>;
}

class CategoryController implements ICategoryController {

    async create(request: Request, response: Response, next: Function): Promise<Response> {
        const { name, description } = request.body;
        const categoriesAlreadyExists = await CategoryService.findByName(
            name
        );

        if (categoriesAlreadyExists) {
            throw new AppError("Category Already exists!");
        }
        const createCategory = CategoryService.create({ name, description });

        return response.status(201).send();

        next();
    }

    async list(request: Request, response: Response, next: Function): Promise<Response> {
        const list = CategoryService.list();
        const all = await list;
        return response.json(all);
        next();
    }

    async delete(request: Request, response: Response, next: Function): Promise<Response> {
        const category = request.params.name;
            await CategoryService.delete(category);        
         
        return response.status(204).json({});

        next();
    }
}

export default new CategoryController;
