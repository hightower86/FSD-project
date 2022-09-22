import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import "./index.scss";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/"} element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default App;
