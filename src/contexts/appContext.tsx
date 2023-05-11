import React from "react";

interface IProps {
  children: React.ReactNode;
}

export const webAppContext = React.createContext<WebApp>({} as WebApp);

const WebAppProvider = ({ children }: IProps) => {
  const [app, setApp] = React.useState({} as WebApp);

  React.useEffect(() => {
    setApp(window.Telegram.WebApp);
  }, []);

  React.useEffect(() => {
    if (!app) return;
    app.ready && app.ready();
  }, [app]);

  return (
    <webAppContext.Provider value={app}>{children}</webAppContext.Provider>
  );
};

export default WebAppProvider;
