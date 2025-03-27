'use client'
import { Layout } from 'antd';

const AdminFooter = () => {
    const { Footer } = Layout;

    return (
        <>
            <Footer style={{ textAlign: 'center' }}>
                Ghost ©{new Date().getFullYear()} Created by @ghost
            </Footer>
        </>
    )
}

export default AdminFooter;