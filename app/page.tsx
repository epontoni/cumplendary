import { Cake } from "lucide-react";
import Header from "./components/Header";
import { Badge } from "@/components/ui/badge";
import { cn, diasRestantes } from "@/lib/utils";

const calendar = [
  {
    month: "Enero",
    birthdays: [
      { name: "ANGELETTI, Alejandro F.", date: { day: 1, month: 1 } },
      { name: "PIERSIMONI, Anibal J.", date: { day: 10, month: 1 } },
      { name: "Bonetto, Lorena S.", date: { day: 18, month: 1 } },
      { name: "RINAUDO, Lucrecia", date: { day: 23, month: 1 } },
      { name: "MOLINEGRO, Zulma M.", date: { day: 26, month: 1 } },
      { name: "LOVERA, Gisela M.", date: { day: 28, month: 1 } },
      { name: "MARTINEZ, Facundo", date: { day: 28, month: 1 } }
    ]
  },
  {
    month: "Febrero",
    birthdays: [
      { name: "TORRES, Horacio D.", date: { day: 1, month: 2 } },
      { name: "BAROLO, Viviana G.", date: { day: 2, month: 2 } },
      { name: "QUINTERO, Luis M.", date: { day: 6, month: 2 } },
      { name: "VALINOTTI, Gerardo E.", date: { day: 8, month: 2 } },
      { name: "CIAMBERLINI, Ivana A.", date: { day: 16, month: 2 } },
      { name: "MAZZIERI, Claudio M.", date: { day: 14, month: 2 } },
      { name: "ALESSANDRONI, Matías E.", date: { day: 28, month: 2 } }
    ]
  },
  {
    month: "Marzo",
    birthdays: [
      { name: "FONTANA, Natali del R.", date: { day: 2, month: 3 } },
      { name: "MANSILLA, Eduardo D.", date: { day: 11, month: 3 } },
      { name: "RASPO, Vanesa B.", date: { day: 16, month: 3 } },
      { name: "CASTRILLO, Gisela A.", date: { day: 25, month: 3 } }
    ]
  },
  {
    month: "Abril",
    birthdays: [
      { name: "GUARINO, Francisco A.", date: { day: 2, month: 4 } },
      { name: "COSCHIZA, Andrea A.", date: { day: 8, month: 4 } },
      { name: "STRIGHETTI, Rosalia L.", date: { day: 12, month: 4 } },
      { name: "SILVA, Jorge D.", date: { day: 24, month: 4 } },
      { name: "GÓMEZ, Fernando D.", date: { day: 23, month: 4 } },
      { name: "TITTARELLI, HORACIO", date: { day: 30, month: 4 } }
    ]
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
      { name: "BALDONI, Silvina A.", date: { day: 27, month: 5 } }
    ]
  },
  {
    month: "Junio",
    birthdays: [
      { name: "GAGLIESI, Susana B.", date: { day: 5, month: 6 } },
      { name: "ORTIZ, Juan P.", date: { day: 15, month: 6 } },
      { name: "BELMONTE, Valeria E.", date: { day: 21, month: 6 } },
      { name: "FALCO, Romina del M.", date: { day: 23, month: 6 } },
      { name: "CAPPELLI, Gilda", date: { day: 25, month: 6 } },
      { name: "GÓMEZ, Norma N.", date: { day: 26, month: 6 } },
      { name: "FILIPUZZI, Horacio M.", date: { day: 20, month: 6 } }
    ]
  },
  {
    month: "Julio",
    birthdays: [
      { name: "KAKBERMATTER, María L. J.", date: { day: 6, month: 7 } },
      { name: "RASPO, Fanny M.", date: { day: 6, month: 7 } },
      { name: "RACCA, Carina M.", date: { day: 15, month: 7 } },
      { name: "TOBALDI, Adrian C.", date: { day: 13, month: 7 } },
      { name: "CLIFFORD, Carla L.", date: { day: 16, month: 7 } },
      { name: "DIEGUEZ, Jorge R.", date: { day: 18, month: 7 } },
      { name: "GRASSO, Alfonsina", date: { day: 18, month: 7 } },
      { name: "MARANI, Daniel E.", date: { day: 18, month: 7 } },
      { name: "MOCCICAFREDDO, Natalia", date: { day: 18, month: 7 } },
      { name: "GASTALDI, Cesar C.", date: { day: 14, month: 7 } },
      { name: "MOLINEGRO, Silvina A.", date: { day: 21, month: 7 } },
      { name: "SERASSIO, Lucas", date: { day: 23, month: 7 } },
      { name: "MOYANO, José M.", date: { day: 25, month: 7 } },
      { name: "RAMAZZOTTI, Antonella S.", date: { day: 31, month: 7 } }
    ]
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
      { name: "ROMAGNOLI, Antonela", date: { day: 29, month: 8 } }
    ]
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
      { name: "CARABAJAL, María de los A.", date: { day: 30, month: 9 } }
    ]
  },
  {
    month: "Octubre",
    birthdays: [
      { name: "FUNES, Claudio M.", date: { day: 2, month: 10 } },
      { name: "DE SIMONE, Marina", date: { day: 3, month: 10 } },
      { name: "PIERSIMONI ABATE, Micaela A.", date: { day: 11, month: 10 } },
      { name: "TITTARELLI, Claudia P.", date: { day: 11, month: 10 } },
      { name: "ARTONI, Eduardo M. L.", date: { day: 13, month: 10 } },
      { name: "MOCCICAFREDDO, Alfonsina I.", date: { day: 13, month: 10 } },
      { name: "CALVO, Natalia B.", date: { day: 12, month: 10 } }
    ]
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
      { name: "FIGUEROA, Juan C.", date: { day: 30, month: 11 } }
    ]
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
      { name: "TACCA, Griselda M. del V.", date: { day: 29, month: 12 } }
    ]
  }
];


const MONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center ">
        <Header />

        <section className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 p-8 gap-2">
          {calendar.map((month, index) => (
            <div key={index} className={cn("bg-white rounded-lg shadow p-2 flex flex-col items-center justify-start", new Date().getMonth() === index ? "bg-gray-200": "")}>


              <div className="font-poetsenone text-center text-xl">{month.month}</div>

              <div className="flex flex-col w-full">
                {
                  month.birthdays.map((person: any) => (
                    <div className={cn("flex flex-1 gap-1 items-center max-h-[34px] mb-1", diasRestantes(person.date.day, person.date.month) == 365 ? "bg-white shadow rounded-lg" : "")}>
                      <div className="w-6 h-6 bg-blue-500 flex items-center justify-center text-center rounded-full text-white text-xs font-semibold">
                        {person.date.day}
                      </div>
                      <div className="flex flex-1 justify-between items-center">
                        <div className="text-xs font-bold">{person.name}</div>
                        
                        <div className="flex flex-1 gap-1 justify-end">
                        {/* <Cake className="text-blue-500 h-5 w-5" /> */}
                        {diasRestantes(person.date.day, person.date.month) === 365 ? (<>🥳🎉</>) : null}
                        {diasRestantes(person.date.day, person.date.month) !== 365 && (<Badge variant={"secondary"}>
                           {diasRestantes(person.date.day, person.date.month)} {diasRestantes(person.date.day, person.date.month) > 1 ? "días" : "día"}
                           </Badge>)}
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


      </div>
    </>
  );
}


