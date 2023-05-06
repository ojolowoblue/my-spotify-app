import useToken from "app/hooks/useToken";
import Home from "app/views/Home";
import Login from "app/views/Login";

function App() {
  const token = useToken();

  return (
    <div className="App">{token !== "undefined" ? <Home /> : <Login />}</div>
  );
}

export default App;
