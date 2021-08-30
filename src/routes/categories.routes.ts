import { Response, Router , Request} from "express";
import multer from "multer";

import  CreateCategoryController  from "../modules/car/useCases/Category/CategoryController";
// import { ImportCategoryController } from "../modules/car/useCases/importCategory/ImportCategoryController";
// import { ListCategoriesController } from "../modules/car/useCases/listCategories/ListCategoriesController";

const categoriesRoutes = Router();

const upload = multer({ dest: "./tmp" });


categoriesRoutes.post("/", async (request: Request, response: Response, next) => {
    await  CreateCategoryController.create(request, response, next);
});

categoriesRoutes.get("/", async (request: Request, response: Response, next) => {
    await  CreateCategoryController.list(request, response, next);
});

categoriesRoutes.delete("/:name", async (request: Request, response: Response, next) => {
    await  CreateCategoryController.delete(request, response, next);
});

// categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle);

export { categoriesRoutes };
