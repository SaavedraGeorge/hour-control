export interface WorkdayRecord {
  id: number;
  user: string;
  hoursWorked: number;
  isActive: boolean;
}

// Simulador de base de datos
const workdayHistory: WorkdayRecord[] = [
  { id: 1, user: "Pedro", hoursWorked: 8, isActive: true },
  { id: 2, user: "Ana", hoursWorked: 7.5, isActive: false }
];

// Obtener todos o filtrar por usuario
export const getAllWorkdaysService = (user?: string): WorkdayRecord[] => {
  if (user) {
    return workdayHistory.filter(
      (record) => record.user.toLowerCase() === user.toLowerCase()
    );
  }
  return workdayHistory;
};

// Buscar registro por ID
export const getWorkdayByIdService = (id: number): WorkdayRecord | undefined => {
  return workdayHistory.find((item) => item.id === id);
};

// Crear un nuevo registro
export const createWorkdayService = (user: string, hoursWorked: number): WorkdayRecord => {
  const newRecord: WorkdayRecord = {
    id: workdayHistory.length + 1,
    user,
    hoursWorked,
    isActive: true
  };
  workdayHistory.push(newRecord);
  return newRecord;
};