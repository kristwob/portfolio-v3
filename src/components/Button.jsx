import Image from "next/image";

const Button = ({ title, type, variant, onClick, className, tabIndex = "" }) => {
  switch (variant) {
    case "primary":
      return (
        <button tabIndex={tabIndex} onClick={onClick} type={type} className="bg-orange_400 hover:bg-orange_300 active:bg-orange_500 transition px-5 py-2 text-black">
          {title}
        </button>
      );
    case "secondary":
      return (
        <button tabIndex={tabIndex}
          onClick={onClick}
          type={type}
          className="border border-orange_400 hover:border-orange_300 active:border-orange_500 text-orange_400 hover:text-orange_300 active:text-orange_500 px-5 py-2 "
        >
          {title}
        </button>
      );
    case "back":
      return (
        <button tabIndex={tabIndex}
          onClick={onClick}
          type={type}
          className={`${className} text-orange_400 hover:text-orange_300 active:text-orange_500 flex justify-center items-center gap-2`}
        >
          <Image alt="back-arrow" src="/images/back-arrow.svg" width={24} height={24} />
          {title}
        </button>
      );
    default:
      return <button type={type}>{title}</button>;
  }
};

export default Button;
