'use client'

import { Layout } from "antd";

const ProjectContent = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const { Content } = Layout;

    return (
        <Content style={{

            }}>
            <div
                style={{
                    padding: 24,
                    height: 'calc(100vh - 133px)',
                    overflow:'auto',
                    position:'relative'
                    // background: "#ccc",
                    // borderRadius: "#ccc",
                }}
            >
                {children}
            </div>
        </Content>

    )
}

export default ProjectContent;