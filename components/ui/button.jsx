import Link from "next/link";

const Button = ({ children, link, handleClick }) => {
  if (link) {
    return (
      <Link
        href={link}
        className="w-fit px-10 py-4 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 transition-colors duration-500"
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      onClick={handleClick}
      className="w-[200px] text-sm px-10 py-4 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 transition-colors duration-500"
    >
      {children}
    </button>
  );
};

export default Button;
