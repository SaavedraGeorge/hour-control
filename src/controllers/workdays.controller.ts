import { Request, Response } from "express";
import {
  getAllWorkdaysService,
  getWorkdayByIdService,
  createWorkdayService
} from "../services/workdays.service.js";

// 1. Obtener jornadas (o filtrar por ?user=)
export const getWorkdays = (req: Request, res: Response) => {
  const { user } = req.query;
  const data = getAllWorkdaysService(user as string);
  res.json(data);
};

// 2. Obtener jornada por ID
export const getWorkdayById = (req: Request, res: Response) => {
  const idParam = parseInt(req.params.id, 10);
  const record = getWorkdayByIdService(idParam);

  if (!record) {
    return res.status(404).json({ error: "❌ Workday record not found" });
  }

  res.json(record);
};

// 3. Crear nueva jornada
export const createWorkday = (req: Request, res: Response) => {
  const { user, hoursWorked } = req.body;

  if (!user || hoursWorked === undefined) {
    return res.status(400).json({
      error: "❌ Missing required fields: 'user' and 'hoursWorked'"
    });
  }

  const newRecord = createWorkdayService(user, hoursWorked);

  res.status(201).json({
    message: "✅ Workday logged successfully",
    data: newRecord
  });
};