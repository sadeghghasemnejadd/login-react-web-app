const Button = ({ text, onClickHandler }) => {
  return (
    <button onClick={onClickHandler} className="button">
      {text}
    </button>
  );
};

export default Button;
