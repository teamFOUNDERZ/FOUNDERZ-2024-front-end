import styled from "styled-components";
import { BackButton } from "../../components/BackButton";
import { Box } from "../../components/Box";
import { Button } from "../../components/designSystem/Button";

export default function DetailPost(){
    const company = "토스"
    const introduction = "공인인증서나 보안 매체 없이 앱을 통해 빠르고 손쉽게 송금이 가능한 서비스입니다."
    const Investamount = "12,450,000"
    const outline = "간편송금에서 종합금융 플랫폼으로 성장하는 비바리퍼블리카 토스뱅크 출범으로 금융업 진출 본격화 비바리퍼블리카는 2013년 설립된 전자금융회사로 2015년 공인인증서가 필요 없는 간편송금 서비스인 토스 (Toss)를 시작으로 2021년 11월까지 누적 가입자 2,100만명 이상을 모집하며 빠르게 성장해왔다. 비바리퍼블리카는 간편송금 서비스를 통해 확보한 고객층을 대상으로 계좌, 카드, 신용점수 등의 자산 조회 서비스, 계좌 개설, 적금, 대출 상품 등의 뱅킹 서비스, 인증 서비스 등을 선보이며 금융 서비스 전방위로 사업을 확장, 국내 핀테크를 대표하는 종합 금융 플랫폼으로 성장했다. 비바리퍼블리카는 2021년 10월 토스뱅크 출범을 통해 금융업 진출을 본격화했다. 여신상품과 수신상품, 카드 상품을 각 1개씩만 제공하는 것이 특징이며, 모바일 금융 플랫폼인 토스 애플리케이션 (앱)에 은행 서비스를 담았다. 즉 토스 앱에서 간편송금부터 은행, 증권, 보험 서비스를 모두 이용할 수 있다."
    const InvestmentAttractionStatus = "9차례에 걸쳐 총 9,630억원의 투자금 유치 성공 조달한 투자금을 기반으로 금융업 경쟁력 강화 및 사업 확장 비바리퍼블리카는 2014 ~ 2015년 동안 벤처캐피털 3개사로부터 확보한 초기 투자금 60억원을 기반으로 간편송금서비스 토스 (Toss)를 출시했다. 이후 플랫폼 이용자가 확대됨에 따라 다수의 후속 투자 유치를 이어 갔다. 2016년 이후 매년 자금 조달을 진행했고 시리즈 B 라운드를 통해 260억원을 조달한 이후 각각 540억원, 440억원, 900억원, 770억원, 2,060억원, 4,060억원을 조달했다. 현재까지 케이티비네트워크, 세쿼이아캐피탈, 페이팔 등 국내외 17개 기업 및 벤처캐피털로부터 9차례에 걸쳐 총 1조원 수준의 투자금을 유치했다. 유치 자금은 사업 초기에는 주로 마케팅과 기존 서비스 개선에 활용됐으며, 이후에는 신규 서비스 개발과 신사업 확장을 위한 재원으로 사용됐다. 특히 비바리퍼블리카는 2020년을 기점으로 다수의 M&A 및 지분투자를 통해 사업 영역을 확장하고자 하고 있다. 2020년 LG유플러스의 PG 사업 부문을 인수해 결제 부문을 강화했으며, 2021년에는 학자금 대출 상환 관리 서비스를 제공하는 올라플랜을 인수하고, 미국의 해외 비상장 주식 거래 플랫폼인 리퍼블릭에 지분투자를 진행해 금융 서비스 경쟁력을 강화했다. 또한 사업 확장을 위해서 2021년 쇼핑몰 구축 서비스와 관련된 식스샵, 카페24에 지분투자를 진행했고, 쏘카가 보유하던 승차 공유 서비스 회사인 브이씨엔씨에 대한 인수를 진행했다."
    return(
        <Main>
            <Content>
                <Title>
                    <BackButton/>
                    <Semibold48>{company}</Semibold48>
                    <Regular20>{introduction}</Regular20>
                    <Tag>#금융</Tag>
                </Title>
                <BoxContainer>
                    <Box/>
                    <Box/>
                </BoxContainer>
                <Overview>
                    <SemiBold24>II.기업 개요</SemiBold24>
                    <SemiBold18>1. 개요</SemiBold18>
                    <Regular16>{outline}</Regular16>
                    <SemiBold18>2. 투자유치 현황</SemiBold18>
                    <Regular16>{InvestmentAttractionStatus}</Regular16>
                </Overview>
                <Line/>
                <Invest>
                    <Medium18>총 투자금</Medium18>
                    <Semibold48>{Investamount} <Semibold36>원</Semibold36></Semibold48>
                </Invest>
                <InvestBox>
                    <SemiBold24>사업아이템이 마음에 드셨나요?</SemiBold24>
                    <Button>투자하기</Button>
                </InvestBox>
            </Content>
        </Main>
    )
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
    width: full;
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

const Semibold48 = styled.p`
    font-weight: 600;
    font-size: 48px;
    color: #1860F0;
    line-height: 64px;
    letter-spacing: -2.5%;
`;

const Semibold36 = styled.span`
    font-weight: 600;
    font-size: 36px;
    color: #1860F0;
    line-height: 48px;
    letter-spacing: -2.5%;
`;

const SemiBold24 = styled.p`
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -2.5%;
`;

const SemiBold18 = styled.p`
    margin-left: 24px;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -2.5%;
`;

const Regular20 = styled.p`
    width: 980px;
    font-weight: 400;
    font-size: 20px;
`;

const Regular16 = styled.p`
    margin-left: 48px;
    width: 950px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
`;

const Medium18 = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #666666;
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
    gap: 4px;
`;

const InvestBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F6F6F6;
    border: #EEEEEE;
    border-radius: 16px;
    width: full;
    padding: 40px;
    gap: 20px;
`;