import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./utils/AnimatedRoutes.jsx";
import { cartItemContext } from "./context/Context.js";

function App() {
  const [items, setItems] = useState(0);
  const [bill, setBill] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <cartItemContext.Provider
        value={{ items, setItems, bill, setBill, darkMode }}
      >
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </cartItemContext.Provider>
    </>
  );
}

export default App;
