import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="px-20 py-6 hidden lg:flex items-center justify-between gap-3 text-white bg-black text-2xl">
      <div className="flex items-center gap-3">
        <a href="#" className="hover:opacity-80 transition-all duration-300">
          <Logo className={"w-40"} />
        </a>
        {" | "}
        <a href="#" className="hover:underline">
          Help Center
        </a>
      </div>

      <div className="text-abstract-fff">
        <button className="mr-4 py-2 px-6 border-2 border-abstract-fff rounded-md bg-abstract-191a1b">
          Submit a request
        </button>
        <button className="py-2 px-6 border-2 border-abstract-4C5FD5 rounded-md bg-abstract-4C5FD5 hover:bg-abstract-fff hover:text-abstract-191a1b hover:border-abstract-fff transition-all duration-300">
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
