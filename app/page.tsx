import { Cake } from "lucide-react";
import Header from "./components/Header";

const calendar = [
  {
    month: "Enero",
    birthdays: [
      {
        name: "Cumpleañero 1",
        date: new Date(),
      },
      {
        name: "Cumpleañero 2",
        date: new Date(),
      },
    ],
  },

  {
    month: "Febrero",
    birthdays: [
      {
        name: "Cumpleañero 3",
        date: new Date(),
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <div className="p-1 flex flex-col gap-2 items-center justify-center bg-gray-100 absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
        <Header />

        <section className="grid lg:grid-cols-6 grid-cols-3 p-8">
          <div className="bg-white rounded-lg shadow p-6 flex items-center justify-center">
            <div className="flex flex-col gap-2 items-center">
              <div className="text-4xl font-bold text-blue-500">Cumpleaños</div>
              <div className="text-sm font-light text-gray-500">
                ¡Celebra con nosotros!
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 p-2 w-full rounded-md">
          <div className="flex gap-2 items-center bg-white px-2">
            <div className="vertical-rl font-poetsenone text-center">ENERO</div>

            <div className="flex flex-col flex-1 gap-1">
              <div className="flex flex-1 gap-2 items-center bg-white px-2">
                <div>
                  <Cake className="text-blue-500" />
                </div>
                <div className="flex flex-1 justify-between items-center">
                  <div>
                    <div className="text-sm font-bold">APELLIDO, Nombre</div>
                    <div className="text-xs">9 de Agosto</div>
                  </div>
                  <div className="text-sm font-light">en 19 días</div>
                </div>
              </div>

              <div className="flex flex-1 gap-2 items-center bg-white px-2">
                <div>
                  <Cake className="text-blue-500" />
                </div>
                <div className="flex flex-1 justify-between items-center">
                  <div>
                    <div className="text-sm font-bold">APELLIDO, Nombre</div>
                    <div className="text-xs">9 de Agosto</div>
                  </div>
                  <div className="text-sm font-light">en 19 días</div>
                </div>
              </div>

              <div className="flex flex-1 gap-2 items-center bg-white px-2">
                <div>
                  <Cake className="text-blue-500" />
                </div>
                <div className="flex flex-1 justify-between items-center">
                  <div>
                    <div className="text-sm font-bold">APELLIDO, Nombre</div>
                    <div className="text-xs">9 de Agosto</div>
                  </div>
                  <div className="text-sm font-light">en 19 días</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-center bg-white px-2">
            <div className="vertical-rl font-poetsenone text-center">
              FEBRERO
            </div>

            <div className="flex flex-col flex-1 gap-1">
              <div className="flex flex-1 gap-2 items-center bg-white px-2">
                <div>
                  <Cake className="text-blue-500" />
                </div>
                <div className="flex flex-1 justify-between items-center">
                  <div>
                    <div className="text-sm font-bold">APELLIDO, Nombre</div>
                    <div className="text-xs">9 de Agosto</div>
                  </div>
                  <div className="text-sm font-light">en 19 días</div>
                </div>
              </div>

              <div className="flex flex-1 gap-2 items-center bg-white px-2">
                <div>
                  <Cake className="text-blue-500" />
                </div>
                <div className="flex flex-1 justify-between items-center">
                  <div>
                    <div className="text-sm font-bold">APELLIDO, Nombre</div>
                    <div className="text-xs">9 de Agosto</div>
                  </div>
                  <div className="text-sm font-light">en 19 días</div>
                </div>
              </div>

              <div className="flex flex-1 gap-2 items-center bg-white px-2">
                <div>
                  <Cake className="text-blue-500" />
                </div>
                <div className="flex flex-1 justify-between items-center">
                  <div>
                    <div className="text-sm font-bold">APELLIDO, Nombre</div>
                    <div className="text-xs">9 de Agosto</div>
                  </div>
                  <div className="text-sm font-light">en 19 días</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-center bg-white px-2">
            <div className="vertical-rl font-poetsenone text-center">MARZO</div>

            <div className="flex flex-col flex-1 gap-1">
              <div className="flex flex-1 gap-2 items-center bg-white px-2">
                <div>
                  <Cake className="text-blue-500" />
                </div>
                <div className="flex flex-1 justify-between items-center">
                  <div>
                    <div className="text-sm font-bold">APELLIDO, Nombre</div>
                    <div className="text-xs">9 de Agosto</div>
                  </div>
                  <div className="text-sm font-light">en 19 días</div>
                </div>
              </div>

              <div className="flex flex-1 gap-2 items-center bg-white px-2">
                <div>
                  <Cake className="text-blue-500" />
                </div>
                <div className="flex flex-1 justify-between items-center">
                  <div>
                    <div className="text-sm font-bold">APELLIDO, Nombre</div>
                    <div className="text-xs">9 de Agosto</div>
                  </div>
                  <div className="text-sm font-light">en 19 días</div>
                </div>
              </div>

              <div className="flex flex-1 gap-2 items-center bg-white px-2">
                <div>
                  <Cake className="text-blue-500" />
                </div>
                <div className="flex flex-1 justify-between items-center">
                  <div>
                    <div className="text-sm font-bold">APELLIDO, Nombre</div>
                    <div className="text-xs">9 de Agosto</div>
                  </div>
                  <div className="text-sm font-light">en 19 días</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
