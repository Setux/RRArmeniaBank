import { apiContext } from "./contexts/apiContext";
import { webAppContext } from "./contexts/appContext";
import { useContext, useEffect } from "react";

function App() {
  const app = useContext(webAppContext);
  const API = useContext(apiContext);

  useEffect(() => {
    if (app && API) {
      API.getBalance();
    }
  }, [app, API])

  return (
    <div className="App">
    </div>
  );
}

export default App;
