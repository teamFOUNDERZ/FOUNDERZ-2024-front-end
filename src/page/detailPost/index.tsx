import styled from "styled-components";
import { BackButton } from "../../components/BackButton";
import { Box } from "../../components/Box";

export default function DetailPost(){
    const company = "토스"
    return(
        <Main>
            <Content>
                <Title>
                    <BackButton/>
                    <Semibold48>{company}</Semibold48>
                    <Regular20>공인인증서나 보안 매체 없이 앱을 통해 빠르고 손쉽게 송금이 가능한 서비스입니다.공인인증서나 보안 매체 없이 앱을 통해 빠르고 손쉽게 송금이 가능한 서비스입니다.공인인증서나 보안 매체 없이 앱을 통해 빠르고 손쉽게 송금이 가능한 서비스입니다.공인인증서나 보안 매체 없이 앱을 통해 빠르고 손쉽게 송금이 가능한 서비스입니다.</Regular20>
                    <Tag>#금융</Tag>
                </Title>
                <BoxContainer>
                    <Box/>
                    <Box/>
                </BoxContainer>
                <Overview>
                    <SemiBold24>II.기업개요</SemiBold24>
                    <SemiBold18>1. 개요</SemiBold18>
                    <Regular16>간편송금에서 종합금융 플랫폼으로 성장하는 비바리퍼블리카 토스뱅크 출범으로 금융업 진출 본격화 비바리퍼블리카는 2013년 설립된 전자금융회사로 2015년 공인인증서가 필요 없는 간편송금 서비스인 토스 (Toss)를 시작으로 2021년 11월까지 누적 가입자 2,100만명 이상을 모집하며 빠르게 성장해왔다. 비바리퍼블리카는 간편송금 서비스를 통해 확보한 고객층을 대상으로 계좌, 카드, 신용점수 등의 자산 조회 서비스, 계좌 개설, 적금, 대출 상품 등의 뱅킹 서비스, 인증 서비스 등을 선보이며 금융 서비스 전방위로 사업을 확장, 국내 핀테크를 대표하는 종합 금융 플랫폼으로 성장했다. 비바리퍼블리카는 2021년 10월 토스뱅크 출범을 통해 금융업 진출을 본격화했다. 여신상품과 수신상품, 카드 상품을 각 1개씩만 제공하는 것이 특징이며, 모바일 금융 플랫폼인 토스 애플리케이션 (앱)에 은행 서비스를 담았다. 즉 토스 앱에서 간편송금부터 은행, 증권, 보험 서비스를 모두 이용할 수 있다.</Regular16>
                </Overview>
                <Line/>
            </Content>
        </Main>
    )
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 136px 20px 0px 20px;
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
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 64px;
`;

const BoxContainer = styled.div`
    display: flex;
    gap: 12px;
`;

const Overview = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const Semibold48 = styled.p`
    font-weight: 600;
    font-size: 48px;
    color: #1860F0;
`;

const SemiBold24 = styled.p`
    font-weight: 600;
    font-size: 24px;
`;

const SemiBold18 = styled.p`
    margin-left: 24px;
    font-weight: 600;
    font-size: 18px;
`;

const Regular20 = styled.p`
    width: 980px;
    font-weight: 400;
    font-size: 20px;
`;

const Regular16 = styled.p`
    margin-left: 48px;
    width: 920px;
    font-weight: 400;
    font-size: 16px;
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

const Line = styled.div`
    width: full;
    height: 1px;
    background-color: #EEEEEE;
`;

const Invest = styled.div`
    
`