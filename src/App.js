import LoginForm from "./components/login-form";
import UserList from "./components/user-list";
import { Route, Routes, Navigate } from "react-router-dom";
import User from "./components/user";
function App() {
  const token = localStorage.getItem("token");
  return (
    <Routes>
      <Route path={"/"} element={<>{token ? <UserList /> : <LoginForm />}</>} />
      {token && <Route path={"/user/:id"} element={<User />} />}

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );

  // return <>{token ? <UserList /> : <LoginForm />}</>;
}

export default App;
