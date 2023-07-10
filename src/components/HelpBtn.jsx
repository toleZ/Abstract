import { BiHelpCircle } from "react-icons/bi";

const HelpBtn = () => {
  return (
    <button className="fixed bottom-0 right-0 flex items-center gap-2 py-3 px-9 m-4 text-abstract-fff font-medium bg-abstract-4C5FD5 rounded-full">
      <BiHelpCircle className="scale-150" />
      Help
    </button>
  );
};

export default HelpBtn;
