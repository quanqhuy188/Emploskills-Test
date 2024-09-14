'use client'

import { CrownOutlined } from "@ant-design/icons"
import { Button, Result, Row, Col } from "antd"
import { useRouter } from 'next/navigation'; 
const HomePage = () => {
    const router = useRouter();

    const handleButtonClick = () => {
        router.push('/projects');
    };

    return (
        <Row
            style={{margin:"auto", maxWidth:"1200px", height: '100vh',  }}
        >
            <Col span={24} style={{ textAlign: 'center' }}>
                <div>
                    <Result
                        icon={<CrownOutlined />}
                        title="Chào mừng đến với bài TEST của QuangHuyDev! ❤️"
                        subTitle={
                            <>
                                Đôi lời trước khi vào bài test...<br />
                                Xin chào đội ngũ HR và các bộ phận liên quan.
                                Rất vui khi được tham gia bài test này và hy vọng rằng 
                                những nỗ lực của tôi sẽ đáp ứng được kỳ vọng của các bạn!<br />
                                Về bài test rõ ràng các bạn đang đánh giá năng lực ReactJs của tôi.. và dĩ nhiên tôi có thể làm điều đó chỉ với Reactjs. Nhưng hiện tại tôi cũng đang tìm hiểu về NextJS và tôi thấy nó khá hay nên tôi quyết định chơi luôn NextJs cho nóng!<br/>
                                Và bây giờ thì vào bài test thôi!!!
                            </>
                        }
                    />
                    <Button onClick={handleButtonClick} style={{ marginTop: 20 }}>
                        Quản lý dự án
                    </Button>
                </div>
            </Col>
        </Row>
    )
}

export default HomePage;
