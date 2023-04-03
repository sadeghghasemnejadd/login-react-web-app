import LoginForm from "./components/login-form";

function App() {
  const token = localStorage.getItem("token");
  return <>{token ? <p>users</p> : <LoginForm />}</>;
}

export default App;
