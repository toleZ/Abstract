import { useState } from "react";
import Logo from "./Logo";
import { ImSearch } from "react-icons/im";
import BurguerButton from "./BurguerButton";

const NavbarSM = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleHidden = () => setIsHidden(!isHidden);

  return (
    <>
      <nav
        className={`relative px-2 md:px-20 py-3 md:py-6 flex lg:hidden items-center justify-between text-abstract-fff ${
          isHidden ? "bg-abstract-000000" : "bg-abstract-191a1b"
        } text-xl md:text-2xl`}
      >
        <div className="flex items-center gap-3">
          <a href="#" className="hover:opacity-80 transition-all duration-300">
            <Logo className={"w-40"} />
          </a>
          {" | "}
          <a href="#" className="hover:underline">
            Help Center
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button>
            <ImSearch />
          </button>
          <BurguerButton isHidden={isHidden} handleHidden={handleHidden} />
        </div>
      </nav>
      <div
        className={`absolute w-full py-12 px-6 bg-abstract-191a1b border-y border-abstract-fff/50 text-abstract-fff text-2xl ${
          isHidden
            ? "hidden"
            : "flex flex-col items-center justify-center gap-4"
        } transition-all duration-300`}
      >
        <span>Submit a request</span>
        <span className="w-1/2 h-[.1px] bg-abstract-fff/50" />
        <span>Sign in</span>
      </div>
    </>
  );
};

export default NavbarSM;
