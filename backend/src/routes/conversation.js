import express from "express";
const router = express.Router();

import ConversationController from "../controllers/ConversationController.js";


const ConversationRoute = (app) => {
    router.post("/chat", ConversationController.chat);

    return app.use("/api/v1/conversations", router);
}

export default ConversationRoute;