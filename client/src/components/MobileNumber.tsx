const MobileNumber = () => {
  return (
    <div className="relative flex border-2 border-cyan-600 rounded-lg p-6 my-6 pop-animation">
      <p className="absolute z-10 bottom-20 left-10 bg-white px-4 text-xl text-cyan-700 ">
        Mobile number
      </p>
      <div className="flex ">
        <svg
          className="text-gray-500"
          width="40"
          height="40"
          viewBox="0 0 14 23"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 22.5C1.45 22.5 0.979333 22.3043 0.588 21.913C0.196 21.521 0 21.05 0 20.5V2.5C0 1.95 0.196 1.479 0.588 1.087C0.979333 0.695667 1.45 0.5 2 0.5H12C12.55 0.5 13.021 0.695667 13.413 1.087C13.8043 1.479 14 1.95 14 2.5V20.5C14 21.05 13.8043 21.521 13.413 21.913C13.021 22.3043 12.55 22.5 12 22.5H2ZM7 20C7.28333 20 7.521 19.904 7.713 19.712C7.90433 19.5207 8 19.2833 8 19C8 18.7167 7.90433 18.4793 7.713 18.288C7.521 18.096 7.28333 18 7 18C6.71667 18 6.47933 18.096 6.288 18.288C6.096 18.4793 6 18.7167 6 19C6 19.2833 6.096 19.5207 6.288 19.712C6.47933 19.904 6.71667 20 7 20ZM2 15.5H12V5.5H2V15.5Z"></path>
        </svg>
        <p className="text-4xl text-gray-700 px-2 tracking-wider">91</p>
      </div>
      <input
        type="text"
        placeholder="__ __ __ __ __ __ __ __ __ "
        className="focus:outline-none w-full text-4xl text-gray-700"
      />
    </div>
  );
};

export default MobileNumber;
