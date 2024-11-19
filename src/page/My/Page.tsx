import styled from "styled-components";
import { useEffect, useState } from "react";
import { Button } from "../../components/designSystem/Button";
import { getMyInvestment } from "../../apis/investmentList"; // 내 투자 관련 API
import { getInvestment } from "../../apis/investmentList"; // 받은 투자 요청 API
import { getMyInfo, getMyInfoItem } from "../../apis/myInfo"; // 유저 정보 API
import { InvestmentItem } from "../../apis/investmentList"; // 투자 항목 타입 임포트
import { Fonts } from "../../styles/fonts";
import { Colors } from "../../styles/colors";

export default function My() {
  const [myInvestments, setMyInvestments] = useState<InvestmentItem[]>([]);
  const [receivedInvestments, setReceivedInvestments] = useState<InvestmentItem[]>([]);
  const [myInfo, setMyInfo] = useState<getMyInfoItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
  
        // 내 투자 정보 가져오기
        console.log("Fetching my investment...");
        const investments = await getMyInvestment();
        console.log("My Investments:", investments); // 데이터를 받아왔는지 확인
        setMyInvestments(investments);
  
        // 받은 투자 요청 정보 가져오기
        console.log("Fetching received investments...");
        const received = await getInvestment();
        console.log("Received Investments:", received); // 데이터를 받아왔는지 확인
        setReceivedInvestments(received);
  
        // 내 정보 가져오기
        console.log("Fetching my info...");
        const userInfo = await getMyInfo();
        console.log("User Info:", userInfo); // 데이터를 받아왔는지 확인
        setMyInfo(userInfo);
  
      } catch (error) {
        setError("데이터를 가져오는 데 실패했습니다.");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  return (
    <MyContainer>
      <Content>
        <TextContainer2>
          <TextContainer>
            <SemiBold24B>개인</SemiBold24B>
            <SemiBold48>{myInfo?.name || "로딩 중"}</SemiBold48>
          </TextContainer>
          <TextContainer>
            <SemiBold16>아이디</SemiBold16>
            <SemiBold20>{myInfo?.account_id || "로딩 중"}</SemiBold20>
          </TextContainer>
          <TextContainer>
            <SemiBold16>전화번호</SemiBold16>
            <SemiBold20>{myInfo?.phone_number || "로딩 중"}</SemiBold20>
          </TextContainer>
        </TextContainer2>
        <Field>
          <SemiBold16>관심분야</SemiBold16>
          <TagContainer>
            {myInfo?.tags?.map((tag) => (
              <Tag key={tag.tag_id}>#{tag.tag_name}</Tag>
            ))}
          </TagContainer>
        </Field>
        <Box>
          <div>
            <SemiBold16m>내 계좌 잔액</SemiBold16m>
            <SemiBold36>{myInfo?.my_money}원</SemiBold36>
          </div>
          <Button>충전하기</Button>
        </Box>
        {/* 받은 투자 요청 표시 */}
        <Field>
        <SemiBold16m>받은 투자 요청</SemiBold16m>
          {receivedInvestments.length > 0 ? (
            receivedInvestments.map((investment, index) => (
              <Box key={index}>
                <div>
                  <SemiBold16B>{investment.business_name}</SemiBold16B>
                  <SemiBold24>{investment.investment_amount.toLocaleString()}원</SemiBold24>
                </div>
                {investment.status === "작성중" && <Medium16>자금 투자 계약서 작성중</Medium16>}
                {investment.status === "체결됨" && (
                  <BoxContainer>
                    <SemiBold16B>{investment.status}</SemiBold16B>
                    <Button kind="white">계약서 확인</Button>
                  </BoxContainer>
                )}
              </Box>
            ))
          ) : (
            <Medium16>받은 투자 요청이 없습니다.</Medium16>
          )}
        </Field>
        {/*내가 투자한 아이템*/}
        <Field>
        <SemiBold16m>내가 투자한 아이템</SemiBold16m>
          {myInvestments.length > 0 ? (
            myInvestments.map((investment, index) => (
              <Box key={index}>
                <div>
                  <SemiBold16B>{investment.business_name}</SemiBold16B>
                  <SemiBold24>{investment.investment_amount.toLocaleString()}원</SemiBold24>
                </div>
                {investment.status === "작성중" && <Medium16>자금 투자 계약서 작성중</Medium16>}
                {investment.status === "체결됨" && (
                  <BoxContainer>
                    <SemiBold16B>{investment.status}</SemiBold16B>
                    <Button kind="white">계약서 확인</Button>
                  </BoxContainer>
                )}
              </Box>
            ))
          ) : (
            <Medium16>투자한 아이템이 없습니다.</Medium16>
          )}
        </Field>
      </Content>
    </MyContainer>
  );
}

// 스타일링 부분은 동일
const MyContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    position: relative;
`;

const Content = styled.div`
    display: flex;
    background-color: #fff;
    width: 50%;
    height: fit-content;
    justify-content: center;
    flex-direction: column;
    padding: 136px 40px 64px 40px;
    gap: 40px;
`;

const TextContainer2 = styled.div`
    display: flex;
    width: 70%;
    height: fit-content;
    justify-content: space-between;
    align-items: center;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
`;

const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const TagContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 8px;
`;

const Box = styled.div`
    height: fit-content;
    background-color: #F6F6F6;
    border: 1px solid #EEEEEE;
    border-radius: 12px;
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation: up 0.4s forwards;
`;

const BoxContainer = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`;

const Tag = styled.div`
    width: fit-content;
    place-items: center;
    display: grid;
    padding: 12px 16px 12px 16px;
    background-color: #F6F6F6;
    border: 1px solid #EEEEEE;
    border-radius: 22px;
`;

const SemiBold48 = styled.p`
    font-weight: 600;
    font-size: 48px;
    color: #000;
    line-height: 64px;
    letter-spacing: -2.5%;
`;

const SemiBold36 = styled.p`
    font-weight: 600;
    font-size: 36px;
    color: #000;
    line-height: 48px;
    letter-spacing: -2.5%;
`;

const SemiBold24B = styled.p`
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -2.5%;
    color: #1860F0;
`;

const SemiBold24 = styled.p`
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -2.5%;
    color: #000;
`;

const SemiBold20 = styled.p`
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
`;

const SemiBold16 = styled.p`
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -2.5%;
    color: #666666;
`;

const SemiBold16m = styled.p`
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -2.5%;
    color: #666666;
    animation: up 0.4s forwards;
`;

const SemiBold16B = styled.p`
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -2.5%;
    color: #1860F0;
`;

const Medium16 = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #666666;
`;
