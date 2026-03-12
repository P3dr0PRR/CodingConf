import type { InputsData } from "../App";

export function Congrats({
  data,
}: {
  data: InputsData | null;
  onBack: () => void;
}) {
  return (
    <section className="flex flex-col items-center justify-center w-full mx-auto my-8 text-white text-center font-poppins ">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 ">
        Congrats,{" "}
        <span className="bg-linear-to-r from-red-400 via-white to-white bg-clip-text text-transparent">
          {data?.fullName}
        </span>
        ! <br></br> Your Ticket is ready.
      </h2>
      <p className="md:text-lg lg:text-xl">
        We've emailed yout ticket to <br></br> <span className="text-red-400">{data?.email}</span>{" "}and Will send
        updates in the run up to the event.
      </p>
    </section>
  );
}
