const Button = (props) => {
  const { children, className, onClick, type } = props;
  return (
    <button type={type} onClick={onClick} className={`flex justify-center items-center py-2 xl:py-3 rounded-xl font-bold ${className}`}>
      {children}
    </button>
  );
};

export default Button;
