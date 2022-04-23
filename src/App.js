import "./App.css";
import { useTranslation } from "react-i18next";
import HomePage from "./Pages/Home";

import { useEffect } from "react";
function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage("uz");
  }, []);
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
