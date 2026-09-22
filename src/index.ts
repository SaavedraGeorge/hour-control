import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import workdaysRouter from "./routes/jornadas.routes.js";

const app = express();
const PORT = 3000;

// 1. Middleware de seguridad para cabeceras HTTP
app.use(helmet());

// 2. Middleware para procesar cuerpos JSON
app.use(express.json());

// 3. Middleware personalizado: Logger de peticiones entrantes
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Pasa el control al siguiente middleware o ruta
});

app.get("/", (req: Request, res: Response) => {
  res.send("⏱️ hour-control API - Secured & Layered");
});

// Montamos las rutas de jornadas
app.use("/jornadas", workdaysRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});