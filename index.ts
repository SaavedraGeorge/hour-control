// Función con anotaciones de tipo para persona y fecha
function saludar(persona: string, fecha: Date) {
  console.log(`¡Hola ${persona}! Hoy es ${fecha.toDateString()}`);
}

saludar("Desarrollador", new Date());