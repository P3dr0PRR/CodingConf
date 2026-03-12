import bg from "./assets/imgs/bg_Coding-Conf.png";

import { Header } from "./components/header";
import { About } from "./components/about";
import { Inputs } from "./components/inputs";
import { Ticket } from "./components/ticket";
import { Congrats } from "./components/congrats";

import { useState } from "react";
export type InputsData = {
  fullName: string;
  email: string;
  github: string;
  image: File | null;
};

function App() {
  const [submitedData, setSubmitedData] = useState<InputsData | null>(null);

  function handleSubmit(data: InputsData) {
    setSubmitedData(data);
  }

  function handleBack() {
    setSubmitedData(null);
  }

  if (submitedData) {
    return (
      <section
        className="bg-cover min-h-full px-4 py-6 md:px-40 md:py-20 lg:px-72 xl:px-96 2xl:px-128 cursor-default"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Header />
        <Congrats
          data={submitedData}
          onBack={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Ticket data={submitedData} onBack={handleBack} />
      </section>
    );
  }

  return (
    <main
      className="bg-cover min-h-full px-4 py-6 md:px-40 md:py-20 lg:px-72 xl:px-96 2xl:px-128 cursor-default"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Header />
      <About />
      <Inputs onSubmit={handleSubmit} />
    </main>
  );
}

export default App;
