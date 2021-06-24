/**
 * Time: 2021/6/23.
 * Author: Yang PengFei
 */
import React, { useState } from "react"
import {
    Link
} from 'react-router-dom'
import Routes from '../routers/subRoutes'
import { Layout, Menu, Button} from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
  } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
const rootSubmenuKeys = ['sub1', 'sub2'];

const Laypout = () => {
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const [current, setCurrent] = useState('1');
    
    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          setOpenKeys(keys);
        } else {
          setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    const handleClick = e => {
        setCurrent( e.key )
    };
    return (
        <Layout style={{height:'100%'}}>
            <Sider>
                <Menu
                    mode="inline"
                    theme="dark"
                    openKeys={openKeys}
                    onOpenChange={onOpenChange} 
                    onClick={handleClick}
                    selectedKeys={[current]}
                    >
                    <SubMenu key="sub1" icon={<MailOutlined />} title="首页">
                        <Menu.Item key="1">
                            <Link to='/app/home'>home</Link >
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="用户">
                        <Menu.Item key="2">
                        <Link to='/app/user'>user</Link >
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout>
                <Header>Header</Header>
                <Content><Routes /></Content>
            </Layout>
        </Layout>
    );
};

export default Laypout;
