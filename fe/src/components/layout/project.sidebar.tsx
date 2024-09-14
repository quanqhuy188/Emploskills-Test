'use client'
import Layout from "antd/es/layout";
import Menu from "antd/es/menu";
import {

    ProjectOutlined

} from '@ant-design/icons';
import React, { useContext } from 'react';
import { ProjectContext } from "@/library/project.context";
import type { MenuProps } from 'antd';
import Link from 'next/link'

type MenuItem = Required<MenuProps>['items'][number];

const ProjectSideBar = () => {
    const { Sider } = Layout;
    const { collapseMenu } = useContext(ProjectContext)!;

    const items: MenuItem[] = [

        {
            key: 'grp',
            label: 'Quang Huy Dev',
            type: 'group',
            children: [
                {
                    key: "projects",
                    label: <Link href={"/projects"}>Quản lý dự án</Link>,
                    icon: <ProjectOutlined />,
                }

            ],
        },
    ];

    return (
        <Sider

        trigger={null} collapsible
            collapsed={collapseMenu}
            
        >
            <Menu
                mode="inline"
                defaultSelectedKeys={['projects']}
                items={items}

                theme="dark"
            />
        </Sider>
    )
}

export default ProjectSideBar;