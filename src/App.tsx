import bg from "./assets/imgs/bg_Coding-Conf.png";

import { Header } from "./components/header";
import { About } from "./components/about";
import { Inputs } from "./components/inputs";
function App() {
  return (
    <main
      className="bg-cover min-h-full px-4 py-6"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Header />
      <About />
      <Inputs />
    </main>
  );
}

export default App;
