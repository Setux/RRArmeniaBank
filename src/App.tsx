import { useContext } from "react";
import { webAppContext } from "./contexts/appContext";

function App() {
  const app = useContext(webAppContext);
  console.log(app);

  const sendData = () => {
    app.sendData("Bogdan huesos");
  };
  console.log(app.initData)
  return (
    <div className="App">
      {app.version ? (
        <div className="layout">
          <button onClick={sendData}>click me</button>
          <p>initDataUnsafe</p>
          <code></code>
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
}

export default App;
