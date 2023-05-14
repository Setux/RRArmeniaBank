import { Layout, Menu, theme } from 'antd';
import {
  UserOutlined,
  StockOutlined,
  HistoryOutlined
} from '@ant-design/icons';
import Loader from "./components/Loader/Loader";
import { apiContext } from "./contexts/apiContext";
import { webAppContext } from "./contexts/appContext";
import { useContext, useEffect, useState } from "react";

const { Header, Sider, Content } = Layout;

function App() {
  const app = useContext(webAppContext);
  const API = useContext(apiContext);

  const [collapsed, setCollapsed] = useState(true);
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
        <Sider collapsible collapsed={collapsed} collapsedWidth={50} width={150} onCollapse={(val) => setCollapsed((val))}>
          {collapsed ? <div className="logo" /> : <h1 className='logo_text'>CBoAF</h1>}
          <Menu
            theme="dark"
            mode="inline"
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
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>Head</Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    : <Loader isLoading />
  );
}

export default App;
