import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import ConnectionDb from "./database/index";
import "reflect-metadata";

import "./shared/container";

import { router } from "./routes";
import swaggerFile from "./swagger.json";
import { AppError } from "./errors/AppError";

require('dotenv').config({
    path: (process.env.NODE_ENV || '').trim() === 'local' ? 'local' : '.env'
});

const app = express();


app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

connectionDatabase();


async function connectionDatabase(): Promise<void> {
    await ConnectionDb().then(
        () => console.log(3333 || process.env.PORT, console.log(`DB is running! ${process.env.PORT}`)))
       
}


app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
    });

});

app.listen(3333 || process.env.PORT, () => console.log(`server is running! ${process.env.PORT}`));
