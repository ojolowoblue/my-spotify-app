import useToken from "app/lib/getToken";
import AppWrapper from "app/layout/AppWrapper";
import Home from "app/views/Home";
import Login from "app/views/Login";

function App() {
  const token = useToken();

  return (
    <AppWrapper>
      <div className="App">{token !== "undefined" ? <Home /> : <Login />}</div>
    </AppWrapper>
  );
}

export default App;
