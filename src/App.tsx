import Loader from "./components/Loader/Loader";
import { apiContext } from "./contexts/apiContext";
import { webAppContext } from "./contexts/appContext";
import { useContext, useEffect } from "react";

function App() {
  const app = useContext(webAppContext);
  const API = useContext(apiContext);

  useEffect(() => {
    if (app.initDataUnsafe && API.id) {
      API.getBalance();
    }
  }, [app, API])

  return (
    (app.initDataUnsafe && API.id) ? <div className="app">test</div> : <Loader isLoading />
  );
}

export default App;
