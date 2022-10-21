import express from "express";
require("dotenv").config();
import cors from "cors";
import initRoutes from "./src/routes";
import connectDatabase from "./src/config/connectDatabase";
const swaggerJsDoc = require("swagger-jsdoc");
const app = express();
const swaggerUi = require("swagger-ui-express");
const port = process.env.PORT || 8888;

//config swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.1",
    info: {
      title: "My apis in swaager",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:5000/v1/api/auth",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/index.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
initRoutes(app);
connectDatabase();
const listener = app.listen(port, () => {
  console.log(`Server is running on port ${listener.address().port}`);
});
