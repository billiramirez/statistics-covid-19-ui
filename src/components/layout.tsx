import React, { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

const AppLayout: FC = (props) => {
  const router = useRouter();

  return (
    <Layout className="layout">
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          activeKey={router.route}
          style={{ display: "flex", justifyContent: "end" }}
        >
          <Menu.Item key="/user">
            <Link href="/user">
              <a>User</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/country">
            <Link href="/country">
              <a>Country</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/logout">Log Out</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>{props.children}</Content>
      <Footer style={{ textAlign: "center" }}>Created by Billi Ramirez</Footer>
    </Layout>
  );
};

export default AppLayout;
