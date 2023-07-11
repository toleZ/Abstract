const BurguerButton = ({ isHidden, handleHidden }) => {
  return (
    <button
      className="flex flex-col h-12 w-12 justify-center items-center group"
      onClick={handleHidden}
    >
      <div
        className={`h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300 ${
          !isHidden && "rotate-45 translate-y-3"
        }`}
      />
      <div
        className={`h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300 ${
          !isHidden && "opacity-0"
        }`}
      />
      <div
        className={`h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300 ${
          !isHidden && "-rotate-45 -translate-y-3"
        }`}
      />
    </button>
  );
};

export default BurguerButton;
