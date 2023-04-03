import Button from "./button";

const Header = () => {
  const token = localStorage.getItem("token");
  const logoutHandler = async () => {
    await localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <header className="header">
      {token && <Button text="logout" onClickHandler={logoutHandler} />}
      {!token && <p className="header__text">you should login</p>}
    </header>
  );
};

export default Header;
