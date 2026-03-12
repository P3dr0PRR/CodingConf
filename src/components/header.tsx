import logo from "../assets/imgs/logo.png";
export function Header() {
  return (
    <header className="w-full h-16 text-white gap-2 flex items-center justify-center font-poppins">
      <img src={logo} alt="Coding Conf Logo" className="h-8 mr-2" />
      <h1 className="text-lg font-bold">Coding Conf</h1>
    </header>
  );
}
