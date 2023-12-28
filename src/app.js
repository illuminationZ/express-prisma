import express from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { options } from "./configs/swagger/swaggerOption.js";
import todoRoutes from "./routes/todoRoute.js";
import helmet from "helmet";
import cors from "cors";

const app = express();
const specs = swaggerJsDoc(options);

app.use(helmet()); // helps you secure your Express apps by setting various HTTP headers
app.use(cors()); // enables CORS

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs)); // swagger docs
app.use(express.json()); // parse requests of content-type - application/json
app.use("/todos", todoRoutes); // routes

// NOTE - app listen port from env
const PORT = process.env.PORT || 5000;

// NOTE - app listen
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}/api-docs`)
);
