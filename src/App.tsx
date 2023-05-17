import { Layout, Menu, theme } from 'antd';
import {
  UserOutlined,
  StockOutlined,
  HistoryOutlined
} from '@ant-design/icons';
import { CgDice6 } from 'react-icons/cg';
import Loader from "./components/Loader/Loader";
import { apiContext } from "./contexts/apiContext";
import { webAppContext } from "./contexts/appContext";
import { useContext, useEffect, useState } from "react";
import ProfilePage from './pages/ProfilePage/ProfilePage';
import OffersPage from './pages/OffersPage/OffersPage';

const { Header, Content, Footer } = Layout;

function App() {
  const app = useContext(webAppContext);
  const API = useContext(apiContext);

  const [page, setPage] = useState('1')
  const {
      token: { colorBgContainer },
    } = theme.useToken();

  useEffect(() => {
    if (app.initDataUnsafe && API.id) {
      API.getBalance();
    }
  }, [app, API])

  const getPage = () => {
    switch (page) {
      case '1':
        return <ProfilePage />
      case '2':
        return <OffersPage />
      default:
        return <ProfilePage />
    }
  }

  return (
    (app.initDataUnsafe && API.id) ?
      <Layout style={{minHeight: '100vh'}}>
        <Header style={{ padding: 0, background: colorBgContainer }}><div className='logo'/></Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            height: '100%',
            background: colorBgContainer,
          }}
        >{getPage()}
        </Content>
        <Footer style={{padding: 0, position: 'sticky', bottom: 0, zIndex: 1, width: '100%' }}>
        <Menu
          style={{justifyContent: 'center'}}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[page]}
          onClick={(item) => setPage(item.key)}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
            },
            {
              key: '2',
              icon: <StockOutlined />,
            },
            {
              key: '3',
              icon: <HistoryOutlined />,
            },
            {
              key: '4',
              icon: <CgDice6 />
            }
          ]}
        />
        </Footer>
      </Layout>
    : <Loader isLoading />
  );
}

export default App;
