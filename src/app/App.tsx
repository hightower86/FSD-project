import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { Navbar } from "widgets/Navbar";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
