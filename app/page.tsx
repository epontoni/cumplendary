"use client";

import Congrat from "@/components/Congrat";
// import { Cake } from "lucide-react";
import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { cn, diasRestantes, isTodayBirthday } from "@/lib/utils";
import confetti from "canvas-confetti";

import { useEffect, useState } from "react";

const calendar = [
  {
    month: "Enero",
    birthdays: [
      { name: "ANGELETTI, Alejandro F.", date: { day: 1, month: 1 } },
      { name: "VALINOTTI, Gerardo E.", date: { day: 8, month: 1 } },
      { name: "PIERSIMONI, Anibal J.", date: { day: 10, month: 1 } },
      { name: "BONETTO, Lorena S.", date: { day: 18, month: 1 } },
      { name: "RINAUDO, Lucrecia", date: { day: 23, month: 1 } },
      { name: "MOLINENGO, Zulma M.", date: { day: 26, month: 1 } },
      { name: "LOVERA, Gisela M.", date: { day: 28, month: 1 } },
      { name: "MARTINEZ, Facundo", date: { day: 28, month: 1 } },
    ],
  },
  {
    month: "Febrero",
    birthdays: [
      { name: "TORRES, Horacio D.", date: { day: 1, month: 2 } },
      { name: "BAROLO, Viviana G.", date: { day: 2, month: 2 } },
      { name: "QUINTERO, Luis M.", date: { day: 6, month: 2 } },
      { name: "CIAMBERLINI, Ivana A.", date: { day: 16, month: 2 } },
      { name: "MAZZIERI, Claudio M.", date: { day: 14, month: 2 } },
      { name: "ALESSANDRONI, Matías E.", date: { day: 28, month: 2 } },
    ],
  },
  {
    month: "Marzo",
    birthdays: [
      { name: "FONTANA, Natali del R.", date: { day: 2, month: 3 } },
      { name: "MANSILLA, Eduardo D.", date: { day: 11, month: 3 } },
      { name: "RASPO, Vanesa B.", date: { day: 16, month: 3 } },
      { name: "CASTRILLO, Gisela A.", date: { day: 25, month: 3 } },
    ],
  },
  {
    month: "Abril",
    birthdays: [
      { name: "GUARINO, Francisco A.", date: { day: 2, month: 4 } },
      { name: "COSCHIZA, Andrea A.", date: { day: 8, month: 4 } },
      { name: "STRIGHETTI, Rosalia L.", date: { day: 12, month: 4 } },
      { name: "SILVA, Jorge D.", date: { day: 24, month: 4 } },
      { name: "GÓMEZ, Fernando D.", date: { day: 23, month: 4 } },
      { name: "TITTARELLI, HORACIO", date: { day: 30, month: 4 } },
    ],
  },
  {
    month: "Mayo",
    birthdays: [
      { name: "BURDINO, Pablo A.", date: { day: 6, month: 5 } },
      { name: "PORTA, Ximena A.", date: { day: 8, month: 5 } },
      { name: "REALE, Melina S.", date: { day: 11, month: 5 } },
      { name: "PENNA, Florencia", date: { day: 12, month: 5 } },
      { name: "COLOMBA, Emma M.", date: { day: 15, month: 5 } },
      { name: "ORTIZ, Mariángeles E.", date: { day: 18, month: 5 } },
      { name: "CARASSO, Maricel P.", date: { day: 22, month: 5 } },
      { name: "BALDONI, Silvina A.", date: { day: 27, month: 5 } },
    ],
  },
  {
    month: "Junio",
    birthdays: [
      { name: "GAGLIESI, Susana B.", date: { day: 5, month: 6 } },
      { name: "RACCA, Carina M.", date: { day: 15, month: 6 } },
      { name: "ORTIZ, Juan P.", date: { day: 15, month: 6 } },
      { name: "BELMONTE, Valeria E.", date: { day: 21, month: 6 } },
      { name: "FALCO, Romina del M.", date: { day: 23, month: 6 } },
      { name: "CAPPELLI, Gilda", date: { day: 25, month: 6 } },
      { name: "GÓMEZ, Norma N.", date: { day: 26, month: 6 } },
      { name: "FILIPUZZI, Horacio M.", date: { day: 20, month: 6 } },
    ],
  },
  {
    month: "Julio",
    birthdays: [
      { name: "KALBERMATTER, María L. J.", date: { day: 6, month: 7 } },
      { name: "RASPO, Fanny M.", date: { day: 6, month: 7 } },
      { name: "TOBALDI, Adrian C.", date: { day: 13, month: 7 } },
      { name: "CLIFFORD, Carla L.", date: { day: 16, month: 7 } },
      { name: "DIEGUEZ, Jorge R.", date: { day: 18, month: 7 } },
      { name: "GRASSO, Alfonsina", date: { day: 18, month: 7 } },
      { name: "MARANI, Daniel E.", date: { day: 18, month: 7 } },
      { name: "MOCCICAFREDDO, Natalia", date: { day: 18, month: 7 } },
      { name: "GASTALDI, Cesar C.", date: { day: 14, month: 7 } },
      { name: "MOLINENGO, Silvia A.", date: { day: 21, month: 7 } },
      { name: "SERASSIO, Lucas", date: { day: 23, month: 7 } },
      { name: "MOYANO, José M.", date: { day: 25, month: 7 } },
      { name: "RAMAZZOTTI, Antonella S.", date: { day: 31, month: 7 } },
    ],
  },
  {
    month: "Agosto",
    birthdays: [
      { name: "LÓPEZ, Daniela M.", date: { day: 1, month: 8 } },
      { name: "SIEWERT, Eugenio", date: { day: 1, month: 8 } },
      { name: "FRATICELLI, Julieta A.", date: { day: 3, month: 8 } },
      { name: "PONTONI, Emanuel", date: { day: 9, month: 8 } },
      { name: "LAINATI, Mariano E.", date: { day: 11, month: 8 } },
      { name: "ROSSO, Esteban", date: { day: 11, month: 8 } },
      { name: "LUJAN, María L.", date: { day: 15, month: 8 } },
      { name: "CIAMBERLINI, Fernanda A.", date: { day: 16, month: 8 } },
      { name: "TOEDTLI, Gabriela M.", date: { day: 17, month: 8 } },
      { name: "TORTA, José L.", date: { day: 20, month: 8 } },
      { name: "JAIMES, Diego M.", date: { day: 23, month: 8 } },
      { name: "GUZMAN, Rosana A.", date: { day: 24, month: 8 } },
      { name: "ROMAGNOLI, Antonela", date: { day: 29, month: 8 } },
    ],
  },
  {
    month: "Septiembre",
    birthdays: [
      { name: "RANIERI, Lucas J.", date: { day: 6, month: 9 } },
      { name: "COLOMBA, Lucia M.", date: { day: 16, month: 9 } },
      { name: "RIOS, Carolina E.", date: { day: 18, month: 9 } },
      { name: "ROJAS, Emanuel H. M.", date: { day: 12, month: 9 } },
      { name: "GRASSO, Andrés P.", date: { day: 20, month: 9 } },
      { name: "BALDERRAMO, Saul A.", date: { day: 26, month: 9 } },
      { name: "GROSSO, Marcela A.", date: { day: 26, month: 9 } },
      { name: "CARABAJAL, María de los A.", date: { day: 30, month: 9 } },
    ],
  },
  {
    month: "Octubre",
    birthdays: [
      { name: "FUNES, Claudio M.", date: { day: 2, month: 10 } },
      { name: "DE SIMONE, Marina", date: { day: 3, month: 10 } },
      // { name: "PIERSIMONI ABATE, Micaela A.", date: { day: 11, month: 10 } },
      { name: "TITTARELLI, Claudia P.", date: { day: 11, month: 10 } },
      { name: "ARTONI, Eduardo M. L.", date: { day: 13, month: 10 } },
      { name: "MOCCICAFREDDO, Alfonsina I.", date: { day: 13, month: 10 } },
      { name: "CALVO, Natalia B.", date: { day: 12, month: 10 } },
    ],
  },
  {
    month: "Noviembre",
    birthdays: [
      { name: "BEDETTI, Marina", date: { day: 11, month: 11 } },
      { name: "GONZÁLEZ, Ariana M.", date: { day: 17, month: 11 } },
      { name: "VEGA RAVASI, Claudia B.", date: { day: 21, month: 11 } },
      { name: "GALLIANO, Walter C.", date: { day: 23, month: 11 } },
      { name: "MAINARDI, Fanny", date: { day: 23, month: 11 } },
      { name: "REINAUDI, Natalia S.", date: { day: 24, month: 11 } },
      { name: "TORRES, Esteban", date: { day: 27, month: 11 } },
      { name: "ONGINI, Marcela A.", date: { day: 28, month: 11 } },
      { name: "FIGUEROA, Juan C.", date: { day: 30, month: 11 } },
    ],
  },
  {
    month: "Diciembre",
    birthdays: [
      { name: "ROSSO CAVALLAZZI, Macarena", date: { day: 1, month: 12 } },
      { name: "VILLEGAS, Daniela B. M.", date: { day: 8, month: 12 } },
      { name: "MOLINA, Leila del V.", date: { day: 11, month: 12 } },
      { name: "ROMAGNOLI, María B.", date: { day: 17, month: 12 } },
      { name: "HEREDIA, Débora", date: { day: 20, month: 12 } },
      { name: "LUPPO, Gustavo O.", date: { day: 24, month: 12 } },
      { name: "TACCA, Griselda M. del V.", date: { day: 29, month: 12 } },
    ],
  },
];

const MONTH_NAMES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

function parseMonth(monthStr: string): number {
  const clean = monthStr.trim().toLowerCase();
  const num = parseInt(clean, 10);
  if (!isNaN(num) && num >= 1 && num <= 12) return num;

  // Try month names
  const index = MONTH_NAMES.findIndex((m) => m.toLowerCase() === clean);
  if (index !== -1) return index + 1;

  // Try abbreviations
  const abbreviations = [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic",
  ];
  const abbIndex = abbreviations.findIndex((abb) => clean.startsWith(abb));
  if (abbIndex !== -1) return abbIndex + 1;

  return -1;
}

function parseCSV(csvText: string) {
  const lines = csvText.split(/\r?\n/);
  if (lines.length === 0) return [];

  // Detect separator (comma or semicolon)
  let separator = ",";
  const firstLine = lines[0] || "";
  const commas = (firstLine.match(/,/g) || []).length;
  const semicolons = (firstLine.match(/;/g) || []).length;
  if (semicolons > commas) {
    separator = ";";
  }

  const rawRows: string[][] = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Parse CSV line handling quotes and dynamic separator
    const parts: string[] = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < trimmed.length; i++) {
      const char = trimmed[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === separator && !inQuotes) {
        parts.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }
    parts.push(current.trim());
    rawRows.push(parts);
  }

  if (rawRows.length === 0) return [];

  // Check if the first row is a header
  let startIndex = 0;
  const firstRow = rawRows[0];
  if (firstRow.length >= 3) {
    const dayVal = parseInt(firstRow[1], 10);
    const parsedM = parseMonth(firstRow[2]);
    if (isNaN(dayVal) || parsedM === -1) {
      startIndex = 1; // skip header
    }
  }

  const data: { name: string; day: number; month: number }[] = [];
  for (let i = startIndex; i < rawRows.length; i++) {
    const parts = rawRows[i];
    if (parts.length >= 3) {
      const name = parts[0].replace(/^"|"$/g, "").trim();
      const day = parseInt(parts[1], 10);
      const month = parseMonth(parts[2]);
      if (name && !isNaN(day) && month !== -1) {
        data.push({ name, day, month });
      }
    }
  }

  return data;
}

function buildCalendar(
  birthdays: { name: string; day: number; month: number }[]
) {
  return MONTH_NAMES.map((monthName, index) => {
    const monthNum = index + 1;
    const monthBirthdays = birthdays
      .filter((b) => b.month === monthNum)
      .map((b) => ({
        name: b.name,
        date: { day: b.day, month: b.month },
      }))
      .sort((a, b) => a.date.day - b.date.day);

    return {
      month: monthName,
      birthdays: monthBirthdays,
    };
  });
}

export default function Home() {
  const [calendarData, setCalendarData] = useState(calendar);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [names, setNames] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  // Cargar datos desde localStorage al montar el componente (solo del lado del cliente)
  useEffect(() => {
    setIsMounted(true);
    try {
      const cached = localStorage.getItem("cumplendary_cached_calendar");
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setCalendarData(parsed);
        }
      }
    } catch (e) {
      console.error("Error loading cached calendar:", e);
    }
  }, []);

  //const isBirthday = isTodayBirthday(calendar);

  const shootConfetti = () => {
    // const duration = 15 * 1000;
    // const animationEnd = Date.now() + duration;
    // const defaults = { startVelocity: 10, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    // const interval = setInterval(function () {
    //   const timeLeft = animationEnd - Date.now();

    //   if (timeLeft <= 0) {
    //     return clearInterval(interval);
    //   }

    //   var particleCount = 50 * (timeLeft / duration);
    //   // since particles fall down, start a bit higher than random
    //   confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
    //   confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    // }, 250);

    confetti({
      particleCount: randomInRange(50, 100),
      angle: 60,
      spread: randomInRange(50, 70),
      origin: { x: 0 },
    });

    confetti({
      angle: 120,
      spread: randomInRange(50, 70),
      particleCount: randomInRange(50, 100),
      origin: { x: 1 },
    });
  };

  useEffect(() => {
    // Configurar el timer para actualizar a medianoche
    const setupMidnightUpdate = () => {
      const now = new Date();
      const tomorrow = new Date();
      tomorrow.setDate(now.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0); // medianoche del día siguiente

      const timeUntilMidnight = tomorrow.getTime() - now.getTime();

      // Configurar timeout para medianoche
      const midnightTimeout = setTimeout(() => {
        setCurrentDate(new Date());
        // Reconfigurar para la siguiente medianoche
        setupMidnightUpdate();
      }, timeUntilMidnight);

      return midnightTimeout;
    };

    const midnightTimeout = setupMidnightUpdate();

    // Limpieza
    return () => {
      clearTimeout(midnightTimeout);
    };
  }, []);

  useEffect(() => {
    const fetchCalendarData = async () => {
      try {
        const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS-32XR24R3xtBtRSgbWofagWh4HVriNypncwRtYWFX6u7W6JsEcWOOqlHxEnVRHJazVfgPDk6hk2mJ/pub?output=csv";
        const cacheBuster = `&t=${Date.now()}`;
        const response = await fetch(`${url}${cacheBuster}`);
        if (!response.ok) throw new Error("Error fetching calendar data");

        const csvText = await response.text();
        if (!csvText || csvText.trim().length === 0) {
          console.warn("Spreadsheet CSV is empty");
          return;
        }

        const parsedBirthdays = parseCSV(csvText);
        if (parsedBirthdays.length > 0) {
          const newCalendar = buildCalendar(parsedBirthdays);
          setCalendarData(newCalendar);
          try {
            localStorage.setItem("cumplendary_cached_calendar", JSON.stringify(newCalendar));
          } catch (e) {
            console.error("Error saving calendar to localStorage:", e);
          }
        }
      } catch (error) {
        console.error("Failed to fetch calendar data:", error);
      }
    };

    fetchCalendarData();

    // Sincronizar periódicamente cada 10 minutos
    const syncInterval = setInterval(fetchCalendarData, 600000);

    return () => {
      clearInterval(syncInterval);
    };
  }, [currentDate]);

  useEffect(() => {
    const isBirthdayToday = isTodayBirthday(calendarData, currentDate);
    setIsOpen(isBirthdayToday);

    if (!isBirthdayToday) return;

    shootConfetti();

    // Ejecutar cada 5 minutos (ejemplo)
    const interval = setInterval(shootConfetti, 3000);

    const congratInterval = setInterval(() => {
      setIsOpen((prev) => !prev);
    }, 10000); // cambia cada 5 segundos

    const todayDay = currentDate.getDate();
    const todayMonth = currentDate.getMonth() + 1; // getMonth() is 0-indexed

    const birthdaysToday = calendarData
      .flatMap((monthEntry) => monthEntry.birthdays)
      .filter((b) => b.date.day === todayDay && b.date.month === todayMonth);

    const namesString = birthdaysToday.reduce((acc, curr, index) => {
      return acc + (index > 0 ? ", " : "") + curr.name;
    }, "");

    setNames(namesString);

    // Calcular cuántos milisegundos faltan para la medianoche
    const midnight = new Date(currentDate);
    midnight.setHours(24, 0, 0, 0); // siguiente medianoche
    const timeUntilMidnight = midnight.getTime() - currentDate.getTime();

    // Detener el intervalo a medianoche
    const timeout = setTimeout(() => {
      clearInterval(interval);
      clearInterval(congratInterval);
      setIsOpen(false);
      console.log("Fin del día: se detuvo la función");
    }, timeUntilMidnight);

    // Limpieza al desmontar
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      clearInterval(congratInterval);
    };
  }, [currentDate, calendarData]); // Dependencia de currentDate y calendarData

  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center ">
        <Header />

        <section className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 p-8 gap-2">
          {calendarData.map((month, index) => (
            <div
              key={index}
              className={cn(
                "bg-white rounded-lg shadow p-2 flex flex-col items-center justify-start",
                isMounted && currentDate.getMonth() === index ? "bg-gray-200" : ""
              )}
            >
              <div className="font-poetsenone text-center text-xl">
                {month.month}
              </div>

              <div className="flex flex-col w-full">
                {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  month.birthdays.map((person: any, index) => (
                    <div
                      key={index}
                      className={cn(
                        "flex flex-1 gap-1 items-center max-h-[34px] mb-1",
                        isMounted &&
                          diasRestantes(
                            person.date.day,
                            person.date.month,
                            currentDate
                          ) == 365
                          ? "bg-white shadow rounded-lg"
                          : ""
                      )}
                    >
                      <div className="w-6 h-6 bg-blue-500 flex items-center justify-center text-center rounded-full text-white text-xs font-semibold">
                        {person.date.day}
                      </div>
                      <div className="flex flex-1 justify-between items-center">
                        <div className="text-xs font-bold">{person.name}</div>

                        <div className="flex flex-1 gap-1 justify-end">
                          {/* <Cake className="text-blue-500 h-5 w-5" /> */}
                          {isMounted &&
                          diasRestantes(
                            person.date.day,
                            person.date.month,
                            currentDate
                          ) === 365 ? (
                            <>🥳🎉</>
                          ) : null}
                          {isMounted &&
                          diasRestantes(
                            person.date.day,
                            person.date.month,
                            currentDate
                          ) !== 365 && (
                              <Badge variant={"secondary"}>
                                {diasRestantes(
                                  person.date.day,
                                  person.date.month,
                                  currentDate
                                )}{" "}
                                {diasRestantes(
                                  person.date.day,
                                  person.date.month,
                                  currentDate
                                ) > 1
                                  ? "días"
                                  : "día"}
                              </Badge>
                            )}
                        </div>

                        <div className="text-sm font-light"></div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          ))}
        </section>

        <Congrat name={names} isOpen={isOpen} />
      </div>
    </>
  );
}
