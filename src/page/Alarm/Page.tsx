import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Fonts } from "../../styles/fonts";
import { Colors } from "../../styles/colors";
import { noticeList } from "../../apis/notice";

type NoticeType = {
  notice_id: string;
  type: {
    type: string;
    content: string;
  };
  timestamp: number;
};

export default function Alarm() {
  const [notices, setNotices] = useState<NoticeType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const data: NoticeType[] = await noticeList();
        setNotices(data);
      } catch (err) {
        setError("알림을 가져오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Alarmcontainer>
      <Content>
        <Title>내 알림</Title>
        <div>
          {notices.map((notice) => (
            <List key={notice.notice_id}>
              <p style={{ ...Fonts["BodyMedium"], color: Colors.Blue500 }}>
                {notice.type.type}
              </p>
              <p style={{ ...Fonts["BodyLarge"], color: Colors.Black }}>
                {notice.type.content}
              </p>
              <p style={{ ...Fonts["BodySmall"], color: Colors.Gray600 }}>
                {new Date(notice.timestamp).toLocaleDateString()}
              </p>
            </List>
          ))}
        </div>
      </Content>
    </Alarmcontainer>
  );
}

const Alarmcontainer = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  background-color: #fff;
  width: 50%;
  height: fit-content;
  justify-content: center;
  padding: 120px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 48px;
  line-height: 64px;
  letter-spacing: -2.5%;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #eeeeee;
  height: fit-content;
  padding: 24px 0 24px 0;
  gap: 8px;
  animation: up 0.4s forwards;
`;
