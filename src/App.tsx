import bg from "./assets/imgs/bg_Coding-Conf.png";

import { Header } from "./components/header";
function App() {
  return (
    <main
      className="bg-cover min-h-full px-4 py-6"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Header />
    </main>
  );
}

export default App;
