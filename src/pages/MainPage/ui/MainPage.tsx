import { useTranslation } from "react-i18next";

type Props = {};

const MainPage = (props: Props) => {
  const { t } = useTranslation("main");
  return <div>{t("page.main.title")}</div>;
};

export default MainPage;
