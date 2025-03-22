import routes from "@routes/routes";
import express, { Application} from "express";
import morgan from "morgan";
import cors from "cors";
const app: Application = express();

app.use(express.json()); 
app.use(morgan("dev"));
app.use(cors({
    origin: "http://localhost:4200", // Permitir solo el frontend
    credentials: true // Si usas cookies o autenticación
  }));
app.use("/api", routes());

export default app;