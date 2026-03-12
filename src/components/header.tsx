import logo from "../assets/imgs/logo.png";
export function Header() {
  return (
    <header className="w-full h-10 md:h-12 lg:h-15 text-white gap-2 flex items-center justify-center font-poppins">
      <img src={logo} alt="Coding Conf Logo" className="h-full mr-2" />
      <h1 className="text-lg md:text-2xl lg:text-4xl font-bold">Coding Conf</h1>
    </header>
  );
}
