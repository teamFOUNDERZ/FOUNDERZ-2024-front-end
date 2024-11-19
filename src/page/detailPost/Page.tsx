import { useEffect, useState } from "react";
import styled from "styled-components";
import { BackButton } from "../../components/BackButton";
import { Box } from "../../components/Box";
import { Button } from "../../components/designSystem/Button";
import { Fonts } from "../../styles/fonts";
import { Colors } from "../../styles/colors";
import { getBusiness } from "../../apis/business"; // getBusiness API import

export default function DetailPost() {
  const [business, setBusiness] = useState<any>(null); // 사업 아이템 상태

  const businessId = "kxp8-mBoIxmWKsSJOOotvQ";

  useEffect(() => {
    const fetchBusiness = async () => {
      const result = await getBusiness(businessId); // getBusiness로 사업 아이템 데이터 가져오기
      setBusiness(result);
    };

    fetchBusiness();
  }, [businessId]);

  if (!business) return <div>Loading...</div>; // 데이터가 없으면 로딩 표시

  const { business_name, one_line_introduction, investment_amount, business_introduction, tags } = business;

  return (
    <Main>
      <Content>
        <Title>
          <BackButton />
          <p style={{ ...Fonts["TitleLarge"], color: Colors.Blue500 }}>{business_name}</p>
          <p style={{ ...Fonts["BodyLarge"], color: Colors.Gray600 }}>{one_line_introduction}</p>
          <TagContainer>
            {tags.map((tag: { tag_name: string }, index: number) => (
              <Tag key={index}>#{tag.tag_name}</Tag>
            ))}
          </TagContainer>
        </Title>
        <BoxContainer>
          <Box />
          <Box />
        </BoxContainer>
        <Overview>
          <p style={{ ...Fonts["TitleSmall"], color: Colors.Black }}>II.기업 개요</p>
          <p style={{ ...Fonts["TitleTiny"], color: Colors.Black, marginLeft: "24px" }}>1. 개요</p>
          <p style={{ ...Fonts["BodySmall"], color: Colors.Black, marginLeft: "48px" }}>{business_introduction}</p>
        </Overview>
        <Line />
        <Invest>
          <p style={{ ...Fonts["BodyMedium"], color: Colors.Gray600 }}>총 투자금</p>
          <p style={{ ...Fonts["TitleLarge"], color: Colors.Blue500 }}>
            {investment_amount} <span>원</span>
          </p>
        </Invest>
        <InvestBox>
          <p style={{ ...Fonts["TitleSmall"], color: Colors.Black }}>사업아이템이 마음에 드셨나요?</p>
          <Button>투자하기</Button>
        </InvestBox>
      </Content>
    </Main>
  );
}

const Main = styled.main`
  width: full;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 136px 20px 650px 20px;
  height: calc(100dvh - 64px);
  background: #fff;
`;

const Title = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Content = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const BoxContainer = styled.div`
  width: full;
  display: flex;
  gap: 12px;
`;

const Overview = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const Tag = styled.div`
  padding: 12px 16px;
  background-color: #f6f6f6;
  border: 1px solid #eeeeee;
  border-radius: 22px;
`;

const Line = styled.div`
  width: full;
  height: 1px;
  background-color: #eeeeee;
`;

const Invest = styled.div`
  gap: 4px;
`;

const InvestBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f6;
  border: #eeeeee;
  border-radius: 16px;
  width: full;
  padding: 40px;
  gap: 20px;
`;
