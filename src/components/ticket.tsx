import { useState } from "react";
import logo from "../assets/imgs/logo.png";
import type { InputsData } from "../App";
import git from "../assets/imgs/git.png";

export function Ticket({
  data,
  onBack,
}: {
  data: InputsData | null;
  onBack: () => void;
}) {
  const [ticketNumber] = useState(
    () => Math.floor(Math.random() * 9000) + 1000,
  );

  return (
    <section className="mt-6 flex w-full flex-col items-center gap-4 text-white">
      <div className="bg-transparent p-2 rounded-md flex">
        <div className="bg-blue-950/90 border border-r-0 border-orange-500 rounded-md rounded-r-3xl  flex flex-col ">
          <header className="w-full text-white gap-2 flex flex-col items-center justify-center font-poppins">
            <div className="flex items-center p-2">
              <img
                src={logo}
                alt="Coding Conf Logo"
                className="h-4 md:h-6 lg:h-8 mr-2"
              />
              <h1 className="text-xs md:text-md font-bold">Coding Conf</h1>
            </div>
            <p className="text-xs flex align-end p-2">
              Jan 31, 2026 / Austin, TX
            </p>
          </header>

          <div className="p-4 flex gap-2">
            {data?.image ? (
              <img
                src={URL.createObjectURL(data.image)}
                alt="Avatar"
                className="h-10 w-10 rounded-md object-cover"
              />
            ) : (
              <div className="h-10 w-10 rounded-md bg-white/20" />
            )}
            <div className="flex flex-col gap-1">
              <p>{data?.fullName}</p>
              <div className="flex items-center gap-2">
                <img src={git} alt="GitHub Logo" className="h-4 w-4" />
                <p className="text-xs lg:text-sm">{data?.github}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-l-2 mt-6 h-21 border-dashed border-gray-500 self-stretch" />

        <div className="bg-blue-950/90 border border-l-0 border-orange-500 rounded-l-3xl flex items-center justify-center px-4">
          <span className="-rotate-90 whitespace-nowrap"># {ticketNumber}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={onBack}
        className="rounded-md border border-white/40 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10"
      >
        Voltar
      </button>
    </section>
  );
}
