import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/car/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/car/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../modules/car/useCases/listCategories/ListCategoriesController";

const categoriesRoutes = Router();

const upload = multer({ dest: "./tmp" });

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const importCategoryController = new ImportCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle)

categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle);

export { categoriesRoutes };
