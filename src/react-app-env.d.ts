/// <reference types="react-scripts" />

interface InitDataUnsafe {
  query_id: string;
  hash: string;
  auth_date: string;
  user: {
    first_name: string;
    id: number;
    language_code: string;
    last_name: string;
    username: string;
  }
}

interface WebApp {
  MainButton: any;
  close(): void;
  colorScheme: string;
  expand(): void;
  initData: string;
  initDataUnsafe: InitDataUnsafe;
  isExpanded: boolean;
  isVersionAtLeast(ver: string): boolean;
  offEvent(eventType: string, callBack: Function): void;
  onEvent(eventType: string, callBack: Function): void;
  openTgLink(url: string): void;
  ready(): void;
  sendData(data: string): void;
  themeParams: object;
  version: string;
  viewportHeight: number;
  viewportStableHeight: number;
}

interface Window {
  Telegram: {
    WebView: any;
    webData: any;
    WebApp: WebApp;
  };
}
