import type { Metadata } from "next";

import ProjectSideBar from '@/components/layout/project.sidebar';
import { ProjectContextProvider } from "@/library/project.context";
import ProjectContent from '@/components/layout/project.content';
import ProjectFooter from '@/components/layout/project.footer';
import ProjectHeader from '@/components/layout/project.header';
import React from 'react';
import { Layout } from "antd";


export const metadata: Metadata = {
  title: "QuangHuyDev - Quản lý dự án",
  description: "Tạo bởi QuangHuyDev",
};

const ProjectsLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <ProjectContextProvider>
            <Layout style={{minHeight:"100vh"}}>
            <ProjectSideBar  />
            <Layout >
                <ProjectHeader />
                    <ProjectContent>
                        {children}
                    </ProjectContent>
                    <ProjectFooter />
            </Layout>
            </Layout>
        </ProjectContextProvider>
    )
}

export default ProjectsLayout