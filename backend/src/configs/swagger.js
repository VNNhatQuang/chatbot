import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";


const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Chatbot",
            version: "1.0.0",
            description: "List of APIs for Chatbot"
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                },
            }
        },
        security: [{
            bearerAuth: [],
        }],
        defaultModelsExpandDepth: -1
    },
    apis: ["./src/controllers/*.js"],
    swaggerRouter: {
        swaggerUi: '/api-docs',
        controllers: "./src/controllers",
        useStubs: false,
        useStubsMiddleware: false
    }
};
const swaggerDocs = swaggerJSDoc(swaggerOptions);

export { swaggerUi, swaggerDocs };
