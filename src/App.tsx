import { MetroSpinner } from "react-spinners-kit";
import { webAppContext } from "./contexts/appContext";
import { useContext, useEffect } from "react";
import { getBalance } from "./api";

function App() {
  const app  = useContext(webAppContext);

  useEffect(() => {
    console.log(app.initDataUnsafe);
    // getBalance(app.initDataUnsafe);
  }, [])

  return (
    <div className="App">
    </div>
  );
}

export default App;
