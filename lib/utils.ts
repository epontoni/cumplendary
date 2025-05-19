import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function diasRestantes(dia: number, mes:number) {
  const hoy = new Date()
  const anioActual = hoy.getFullYear()

  // Los meses en JS van de 0 (enero) a 11 (diciembre), por eso restamos 1
  let fechaObjetivo = new Date(anioActual, mes - 1, dia);

  // Si la fecha ya pasó este año, usamos el año siguiente
  if (fechaObjetivo < hoy) {
    fechaObjetivo = new Date(anioActual + 1, mes - 1, dia);
  }

  // Calcular la diferencia en milisegundos
  const diferencia = fechaObjetivo.getTime() - hoy.getTime();

  // Convertir a días
  const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

  return dias;
}

export function isTodayBirthday(calendar: any) {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth() + 1; // Los meses en JS van de 0 a 11

  for (const monthEntry of calendar) {
    for (const birthday of monthEntry.birthdays) {
      if (
        birthday.date.day === currentDay &&
        birthday.date.month === currentMonth
      ) {
        return true;
      }
    }
  }

  return false;
}