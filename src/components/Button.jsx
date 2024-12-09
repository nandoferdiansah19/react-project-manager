const Button = ({ textContent, style, ...props }) => {
  return (
    <button
      className={`px-4 py-2 text-xs md:text-base rounded-md ${style}`}
      {...props}
    >
      {textContent}
    </button>
  );
};

export default Button;
