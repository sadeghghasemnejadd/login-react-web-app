import LoginForm from "./components/login-form";
import UserList from "./components/user-list";

function App() {
  const token = localStorage.getItem("token");
  return <>{token ? <UserList /> : <LoginForm />}</>;
}

export default App;
