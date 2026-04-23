import express from "express";
import cors from "cors";
import helmet from "helmet";
import { swaggerUi, swaggerDocs } from "../configs/swagger.js";


const InitialMiddlewares = (app) => {
    app.use(cors());
    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}

export default InitialMiddlewares;