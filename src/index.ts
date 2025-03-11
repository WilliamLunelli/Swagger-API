import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";
import userRoutes from "./routes/userRoutes";

// Inicialização do app Express
const app = express();
const port = 3000;

// Middleware para processar JSON
app.use(express.json());

// Configuração do Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rota de boas-vindas
app.get("/", (req, res) => {
  res.json({
    message: "Bem-vindo à API com Swagger e TypeScript!",
    documentation: `http://localhost:${port}/api-docs`,
  });
});

// Rotas da API
app.use("/api/users", userRoutes);

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  console.log(
    `Documentação Swagger disponível em http://localhost:${port}/api-docs`
  );
});
