import { CiMenuBurger } from "react-icons/ci";
import Logo from "../../public/images/logo.png";
import Image from "next/image";

export default function Navbar() {
  const commonButtonClass =
    "border-2 border-blue-950 rounded-3xl  px-4 py-1 text-blue-950 font-bold text-sm";
  return (
    <>
      <nav className="bg-white flex justify-between py-3 px-2">
        <button className={`${commonButtonClass} w-3/6 flex items-center`}>
          {" "}
          <CiMenuBurger /> <span className="mx-auto">Menu</span>
        </button>
        <Image src={Logo} alt="logo" width={40} height={50} />

        <button className={commonButtonClass}>Log In</button>
      </nav>
      <aside className="hidden bg-blue-700 absolute pl-2 py-3  text-white w-3/6 h-screen">
        <ol>
          <li className="font-bold">PERSONAL</li>
        </ol>

      </aside>
    </>
  );
}
