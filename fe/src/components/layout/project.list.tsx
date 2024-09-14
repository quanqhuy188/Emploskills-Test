'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Card, Col, Row ,Image,Typography} from 'antd';
import { EditOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { getYouTubeThumbnailFromUrl } from '@/utils/youtubeUtils';
import GeneralModal from '../modal/general.modal';
import moment from 'moment';
const { Text } = Typography;

const { Meta } = Card;

interface IProps {
  projects: IProject[];
}

function ProjectList({ projects }: IProps) {
  const router = useRouter();
  const [projectItem, setProjectItem] = useState<IProject | null>(null);
  const [showModal, setShowModal] = useState<{ type: 'create' | 'update' | 'delete' | null; show: boolean }>({ type: null, show: false });

  const handleShowModal = (type: 'create' | 'update' | 'delete', item?: IProject) => {
    setProjectItem(item || null);
    setShowModal({ type, show: true });
  };
  const handleCloseModal = () => {
    setShowModal({ ...showModal, show: false });
  };



  return (
    <>
    <Button className="mb-4"  type="primary" onClick={() =>{
handleShowModal('create')
    }}>Thêm dự án</Button>
    <div>
    <Row gutter={16}>
        {projects?.map(item => (
          <Col xs={24} sm={12} md={12} lg={8} xl={6} key={item.id}>
            <Card 
            
            className="mb-3 w-100"
              cover={
                <Image
                  alt="example"
                  src={getYouTubeThumbnailFromUrl(item.pictureURL)}
                />
              }
              actions={[
                <EyeOutlined key="view" onClick={() => router.push(`/projects/${item.id}`)} />,
                <EditOutlined key="edit" onClick={() => handleShowModal('update', item)} />,
                <DeleteOutlined key="delete" onClick={() => handleShowModal('delete', item)} />,
              ]}
            >
              <Meta
                title={item.title} // Giả định rằng item có thuộc tính title
                description={
                  <Text ellipsis>
                  {item.description}
                </Text>
                } // Giả định rằng item có thuộc tính description
              />
              <Text style={{ color:"#6c757d",fontSize:"12px",float:"right",marginTop:"10px"}}>{moment(item?.createdAt).format('DD/MM/YYYY HH:mm')}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>


      <GeneralModal
        show={showModal.show}
        setShow={handleCloseModal}
        type={showModal.type || 'create'}
        projectItem={projectItem}
        setProjectItem={setProjectItem}
      />

    </>
  );
}

export default ProjectList;
