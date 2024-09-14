"use client";
import { ProjectContext } from "@/library/project.context";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
import { useContext } from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import Link from "next/link";

const ProjectHeader = () => {
  const { Header } = Layout;
  const { collapseMenu, setCollapseMenu } = useContext(ProjectContext)!;

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link rel="noopener noreferrer" href="/">
          Quay lại trang chủ
        </Link>
      ),
    },
  ];

  return (
    <>
      <Header
      
        style={{
          padding: 0,
          display: "flex",
          background: "#ffffff",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        
        <Button
          type="text"
          icon={collapseMenu ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapseMenu(!collapseMenu)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <Dropdown menu={{ items }}>
          <a
            onClick={(e) => e.preventDefault()}
            style={{
              color: "unset",
              lineHeight: "0 !important",
              marginRight: 20,
            }}
          >
            <Space>
              Chào mừng
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </Header>
    </>
  );
};

export default ProjectHeader;
