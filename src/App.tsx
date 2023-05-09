import { useContext } from "react";
import { webAppContext } from "./contexts/appContext";
import { MetroSpinner } from "react-spinners-kit";
function App() {
  const app = useContext(webAppContext);

  return (
    <div className="App">
      <MetroSpinner size={30} color='#2678b6' loading />
    </div>
  );
}

export default App;
