import Button from "./button";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const logoutHandler = async () => {
    await localStorage.removeItem("token");
    navigate("/");
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
