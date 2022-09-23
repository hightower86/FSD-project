import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPageAsync";
import { MainPageAsync } from "./pages/MainPage/MainPageAsync";
import { Suspense, useState } from "react";
import "./styles/index.scss";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

const App = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  return (
    <div className={`app ${theme === Theme.LIGHT ? Theme.LIGHT : Theme.DARK}`}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <hr />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
