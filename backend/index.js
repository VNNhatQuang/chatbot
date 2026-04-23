import dotenv from "dotenv";
dotenv.config();
import express from "express";
import InitialRoutes from "./src/routes/index.js";
import InitialMiddlewares from "./src/middlewares/index.js";

const app = express();
InitialMiddlewares(app);
InitialRoutes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/api-docs`);
});