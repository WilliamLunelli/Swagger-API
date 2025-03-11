// src/config/swagger.ts
import swaggerJsDoc from "swagger-jsdoc";
import { join } from "path";

const swaggerOptions: swaggerJsDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API com Express e TypeScript",
      version: "1.0.0",
      description:
        "Uma API REST simples com Express, TypeScript e documentação Swagger",
    },
  },
  // Caminho para o arquivo YAML da documentação
  apis: [join(__dirname, "../docs/swagger/swagger.yaml")],
};

export const swaggerSpec = swaggerJsDoc(swaggerOptions);
