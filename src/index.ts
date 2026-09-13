// 1. Definimos la estructura exacta que tendrá cada registro de trabajo
interface RegistroJornada {
  id: number;
  usuario: string;
  horaInicio: string;
  horasTrabajadas:number;
  activo: boolean;
}

// 2. Creamos un objeto que cumple obligatoriamente con la interfaz
const marcaActual: RegistroJornada = {
  id: 1,
  usuario: "Pedro",
  horaInicio: new Date().toLocaleTimeString(),
  horasTrabajadas: 8,
  activo: true
};

// 1. Declaramos un arreglo que solo acepta objetos del tipo RegistroJornada
const historialJornadas: RegistroJornada[] = [];

// 2. Guardamos nuestro objeto 'marcaActual' dentro de la lista
historialJornadas.push(marcaActual);

// 3. Agregamos un segundo registro directamente al arreglo
historialJornadas.push({
  id: 2,
  usuario: "Pedro",
  horaInicio: "08:00:00",
  horasTrabajadas: 7.5,
  activo: false
});

historialJornadas.push({
  id: 3,
  usuario: "Pedro",
  horaInicio: "08:00:00",
  horasTrabajadas: 9,
  activo: false
});

// 4. Mostramos el total de registros y la lista completa
console.log(`📋 Total de registros: ${historialJornadas.length}`);
console.log("📂 Historial completo:", historialJornadas);

const jornadasTerminadas = historialJornadas.filter((registro) => !registro.activo);

// 2. 'map' extrae de cada registro únicamente el número de horas trabajadas
const resumenHoras: number[] = historialJornadas.map((registro) => registro.horasTrabajadas);

const resumenHorasFinalizadas: number[] = historialJornadas
                    .filter((registro) => !registro.activo)
                    .map((registro) => registro.horasTrabajadas);

// 3. Mostramos los resultados procesados en pantalla
console.log("🔴 Jornadas finalizadas:", jornadasTerminadas.length);
console.log("⏱️ Lista de horas trabajadas Finalizadas:", resumenHorasFinalizadas);
console.log("⏱️ Lista de horas trabajadas:", resumenHoras);