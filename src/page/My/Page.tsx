import styled from "styled-components";
import { Button } from "../../components/designSystem/Button";
import { Fonts } from '../../styles/fonts';
import { Colors } from '../../styles/colors';

export default function My(){
    return(
        <Mycontainer>
            <Content>
                <Textcontiner2>
                    <Textcontiner>
                        <SemiBold24B>개인</SemiBold24B>
                        <SemiBold48>김승원</SemiBold48>
                    </Textcontiner>
                    <Textcontiner>
                        <SemiBold16>아이디</SemiBold16>
                        <SemiBold20>seungwon</SemiBold20>
                    </Textcontiner>
                    <Textcontiner>
                        <SemiBold16>전화번호</SemiBold16>
                        <SemiBold20>010-2977-8517</SemiBold20>
                    </Textcontiner>
                </Textcontiner2>
                <Field>
                    <SemiBold16>관심분야</SemiBold16>
                    <Tagcontainer>
                        <Tag>#금융</Tag>
                        <Tag>#IT</Tag>
                    </Tagcontainer>
                </Field>
                <Box>
                    <div>
                        <SemiBold16m>내 계좌 잔액</SemiBold16m>
                        <SemiBold36>12,450,000원</SemiBold36>
                    </div>
                    <Button>충전하기</Button>
                </Box>
                <div>
                    <SemiBold16m>받은 투자 요청</SemiBold16m>
                    <Box>
                        <div>
                            <SemiBold16B>김승원님</SemiBold16B>
                            <SemiBold24>100,000원 투자 요청</SemiBold24>
                        </div>
                        <Button>충전하기</Button>
                    </Box>
                </div>
                <Field>
                    <SemiBold16m>내가 투자한 아이템</SemiBold16m>
                    <Box>
                        <div>
                            <SemiBold16B>토스</SemiBold16B>
                            <SemiBold24>100,000원</SemiBold24>
                        </div>
                        <Medium16>자금 투자 계약서 작성중</Medium16>
                    </Box>
                    <Box>
                        <div>
                            <SemiBold16B>토스</SemiBold16B>
                            <SemiBold24>100,000원</SemiBold24>
                        </div>
                        <Button>자금 투자 계약서 확인하기</Button>
                    </Box>
                    <Box>
                        <div>
                            <SemiBold16B>토스</SemiBold16B>
                            <SemiBold24>100,000원</SemiBold24>
                        </div>
                        <Boxcotainer>
                            <SemiBold16B>체결됨</SemiBold16B>
                            <Button kind="white">자금 투자 계약서 확인하기</Button>
                            <Button kind="red">자금 투자 계약서 확인하기</Button>
                        </Boxcotainer>
                    </Box>
                </Field>
            </Content>
        </Mycontainer>
    )
}

const Mycontainer = styled.div`
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
    gap: 40px
`;

const Textcontiner2 = styled.div`
    display: flex;
    width: 70%;
    height: fit-content;
    justify-content: space-between;
    align-items: center;
`

const Textcontiner = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
`

const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const Tagcontainer = styled.div`
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

const Boxcotainer = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`

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