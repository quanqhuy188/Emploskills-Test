'use client'
import { Layout } from 'antd';

const ProjectFooter = () => {
    const { Footer } = Layout;

    return (
        <>
            <Footer style={{ textAlign: 'center' }}>
                Quang Huy Dev ©{new Date().getFullYear()} Created by @quanqhuy188
            </Footer>
        </>
    )
}

export default ProjectFooter;