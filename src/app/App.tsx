import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { Navbar } from "widgets/Navbar";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="...Loading">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
