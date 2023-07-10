import { AiOutlineArrowRight } from "react-icons/ai";

const Help = () => {
  return (
    <mian>
      <header className="px-8 py-20 flex flex-col items-center justify-center gap-8 bg-abstract-dadbf1">
        <h1 className="text-7xl">How can we help?</h1>
        <form className="relative w-full max-w-[720px] group">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-5 outline-none border border-black rounded-[.25rem] text-xl group-hover:border-abstract-4C5FD5 transition-all duration-200"
          />
          <button className="mr-6 absolute top-1/2 -translate-y-1/2 right-0">
            <AiOutlineArrowRight className="scale-150 group-hover:fill-abstract-4C5FD5 hover:fill-abstract-4C5FD5 hover:cursor-default transition-all duration-200" />
          </button>
        </form>
      </header>
    </mian>
  );
};

export default Help;
