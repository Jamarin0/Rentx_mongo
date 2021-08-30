import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import SpecificationService from "./SpecificationService";

interface ISpecificationController {
    create(request: Request, response: Response, next: Function): Promise<Response>;
    list(request: Request, response: Response, next: Function): Promise<Response>;
    // update(request: Request, response: Response, next: Function): Promise<void>;
    delete(request: Request, response: Response, next: Function): Promise<void>;
}

class SpecificationController implements ISpecificationController {

    async create(request: Request, response: Response, next: Function): Promise<Response> {
        const { name, description } = request.body;
        const specificaitonsAlreadyExists = await SpecificationService.findByName(
            name
        );

        if (specificaitonsAlreadyExists) {
            throw new AppError("Specification already exists!");
        }
        const createCategory = SpecificationService.create({ name, description });

        return response.status(201).send();

        next();
    }

    async list(request: Request, response: Response, next: Function): Promise<Response> {
        const list = SpecificationService.list();
        const all = await list;
        return response.json(all);
        next();
    }

    async delete(request: Request, response: Response, next: Function): Promise<Response> {
        const category = request.params.name;
            await SpecificationService.delete(category);        
         
        return response.status(204).json({});

        next();
    }
}

export default new SpecificationController;
