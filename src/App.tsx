import { Layout, Menu, theme } from 'antd';
import {
  UserOutlined,
  StockOutlined,
  HistoryOutlined
} from '@ant-design/icons';
import Loader from "./components/Loader/Loader";
import { apiContext } from "./contexts/apiContext";
import { webAppContext } from "./contexts/appContext";
import { useContext, useEffect } from "react";
import ProfilePage from './pages/ProfilePage/ProfilePage';

const { Header, Content, Footer } = Layout;

function App() {
  const app = useContext(webAppContext);
  const API = useContext(apiContext);

  const {
      token: { colorBgContainer },
    } = theme.useToken();

  useEffect(() => {
    if (app.initDataUnsafe && API.id) {
      API.getBalance();
    }
  }, [app, API])

  return (
    (app.initDataUnsafe && API.id) ?
      <Layout style={{height: '100%'}}>
        <Header style={{ padding: 0, background: colorBgContainer }}><div className='logo'/></Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <ProfilePage />
        </Content>
        <Footer style={{padding: 0}}>
        <Menu
          style={{justifyContent: 'center'}}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Профиль',
            },
            {
              key: '2',
              icon: <StockOutlined />,
              label: 'Рынок',
            },
            {
              key: '3',
              icon: <HistoryOutlined />,
              label: 'История',
            }
          ]}
        />
        </Footer>
      </Layout>
    : <Loader isLoading />
  );
}

export default App;
