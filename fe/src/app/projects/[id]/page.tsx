'use client'
import React,{useState} from 'react';
import { useRouter } from 'next/navigation';
import ReactPlayer from 'react-player';
import useSWR,{Fetcher} from 'swr'
import { getYouTubeIframe } from '@/utils/youtubeUtils';
import {GET_BY_ID_API} from "@/constants/ApiConstant";
import { Button, Card, Spin,Typography } from 'antd';
const { Title, Text } = Typography;

const fetcher :Fetcher<IProject , string> = (url:string) => fetch(url).then((res) => res.json());

const DetailProjectPage = ({params} : {params : {id:string}}) => {
  const [loading, setLoading] = useState(true);

  const handleReady = () => {
    setLoading(false);
  };
    const router = useRouter();

    const urlApi = `${GET_BY_ID_API}/?id=${params.id}`;
    const { data, error, isLoading } = useSWR(urlApi, fetcher,{
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    })
    if(!data || isLoading) {
        return (
          <div className="text-center pt-4">
          <Spin tip="Loading" size="large"></Spin>
        </div>
        )
      }
      if(error) {
        return <div>error...</div>
      }
    return (
        <>
        <Button className="mb-3" onClick={() => router.push('/projects')} >Quay lại</Button>
          <Card style={{margin:"auto"}}
                  cover={
                    <div style={{ maxWidth: '100%', margin: 'auto', position: 'relative' }}>
                    {loading && (
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1,
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        padding: '10px',
                        borderRadius: '5px',
                      }}>
                        <Spin size="large" />
                      </div>
                    )}
                    <ReactPlayer
                      url={getYouTubeIframe(data?.pictureURL)}
                      width='100%'
                      height='400px'
                      controls
                      onReady={handleReady}
                      style={{ opacity: loading ? 0.5 : 1, transition: 'opacity 0.5s ease' }}
                    />
                  </div>
                  }
          >
          <Title level={4}>{data?.title}</Title>
          <Text>{data?.description}</Text>
          </Card>
        </>

      );
};

export default DetailProjectPage;