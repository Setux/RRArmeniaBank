import { webAppContext } from "./contexts/appContext";
import { useContext, useEffect } from "react";
import { getBalance } from "./api";

function App() {
  const app  = useContext(webAppContext);

  useEffect(() => {
    getBalance(app.initDataUnsafe.user.id);
  }, [app])

  return (
    <div className="App">
    </div>
  );
}

export default App;
