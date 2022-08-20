import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const URL = "https://api.unsplash.com";
const token = "Fn3CLKGW-jNbFkcClpglh7O6E4g7TkqO1jaE7Di2TmM"

const Container = styled.div`
    margin-top: 50px;
`

const MyList = () => {
    const [image, setImage] = useState<any>("");
	useEffect(() => {
		axios.get(`${URL}/photos/random?client_id=${token}`).then(res => {
			setImage(res.data.urls.thumb)
		})
	},[])

    return (
        <Container>
            <List
                itemLayout="vertical"
                size="large"
                dataSource={[{title: "", avatar: "", description: "", content: ""}]}
                renderItem={() => (
                <List.Item
                key={"1"}
                extra={
                    <img
                    width={272}
                    alt="logo"
                    src={image}
                    />
                }
                >
                <List.Item.Meta
                    avatar={<Avatar src={"https://joeschmoe.io/api/v1/random"} />}
                    title={"토니스 코딩"}
                    description={"비대면 맞춤형 코딩 교육 플랫폼 개발"}
                />
                {
                    <ul>
                        <li>홈페이지 퍼블리싱</li>
                        <li>Electron을 통해 플랫폼 Desktop App 개발 및 배포</li>
                        <li>WebRTC API을 통해 학생과 강사간의 소통 기능 개선</li>
                        <li>코드 가독성을 위한 React Hooks, SCSS 도입</li>
                    </ul>
                }
                </List.Item>
            )}
            />
        </Container>
    )
}

export default MyList;