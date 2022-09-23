import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPageAsync";
import { MainPageAsync } from "./pages/MainPage/MainPageAsync";
import { Suspense } from "react";
import "./styles/index.scss";
import { useTheme } from "./theme/useThemeContext";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
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
