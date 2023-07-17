import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'


import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UnorderedListOutlined,
  AppstoreOutlined

} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Select, Space } from 'antd';
import { useTranslation } from 'react-i18next';



const { Header, Sider, Content } = Layout;

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Menu
            style={{ margin: '24px 0 0' }}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}

          // items={[
          //   {
          //     key: '1',
          //     icon: <UnorderedListOutlined />,
          //     label: `${t('menu.menuManageForm')}`,
          //   },
          //   {
          //     key: '2',
          //     icon: <AppstoreOutlined />,
          //     label: `${t('menu.menuManageLayout')}`,
          //   },
          // ]}
          >
            <Menu.Item key="/manageForm" icon={<UnorderedListOutlined />}>
              <Link to="/manageForm">{t('menu.menuManageForm')}</Link>
            </Menu.Item>
            <Menu.Item key="/manageLayout" icon={<AppstoreOutlined />}>
              <Link to="/manageLayout">{t('menu.menuManageLayout')}</Link>
            </Menu.Item>
          </Menu>
          <Select
            defaultValue={i18n.language}
            style={!collapsed ? { margin: '0px 24px 0', width: '70%' } : { margin: '0px 16px 0', width: '70%' }}
            onChange={handleLanguageChange}
            options={[
              { value: 'th', label: 'ไทย' },
              { value: 'en', label: 'English' },
            ]}
          />
        </Space>


      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />

        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 550,
            background: colorBgContainer,
          }}
        >
          <Outlet />
          {/* <h1>{t('greeting')}</h1>
          <button onClick={() => handleLanguageChange('th')}>ไทย</button>
          <button onClick={() => handleLanguageChange('en')}>English</button>
          <button>{t('buttonLabel')}</button> */}
        </Content>
      </Layout>
    </Layout>
  )
}
