import { Response, Request } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {

     handle(request: Request, response: Response): void {
        const { name, description } = request.body;

        this.createCategoryUseCase.execute({ name, description });

        console.log('penetrei aqui', request.body)
        return response.status(201).send();

    }
}

export { CreateCategoryController };
