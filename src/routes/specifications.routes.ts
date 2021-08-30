import { Router, Request, Response } from "express";

import SpecificationController  from "../modules/car/useCases/Specification/SpecificationController";

const specificationsRoutes = Router();



specificationsRoutes.post("/", async (request: Request, response: Response, next) => {
    await  SpecificationController.create(request, response, next);
});

specificationsRoutes.get("/", async (request: Request, response: Response, next) => {
    await  SpecificationController.list(request, response, next);
});

specificationsRoutes.delete("/:name", async (request: Request, response: Response, next) => {
    await  SpecificationController.delete(request, response, next);
});

export { specificationsRoutes };
