import styled from "styled-components";
import { Fonts } from "../../styles/fonts";
import { Colors } from "../../styles/colors";

export default function Alarm(){
    return(
        <Alarmcontainer>
            <Content>
                <Title>내 알림</Title>
                <div>
                    <List>
                        <p style={{ ...Fonts['BodyMedium'], color: Colors.Blue500}}>투자요청</p>
                        <p style={{ ...Fonts['BodyLarge'], color: Colors.Black}}>최승우님이 “토스"에 100,000원 투자를 원하고 있어요.</p>
                        <p style={{ ...Fonts['BodySmall'], color: Colors.Gray600}}>2024.07.17</p>
                    </List>
                    <List>
                        <p style={{ ...Fonts['BodyMedium'], color: Colors.Blue500}}>자금 투자 계획서 확인</p>
                        <p style={{ ...Fonts['BodyLarge'], color: Colors.Black}}>"토스"의 이승건님이 자금 투자 계획서 작성을 마쳤어요.<br/>이상 내용이 없는지 확인하세요</p>
                        <p style={{ ...Fonts['BodySmall'], color: Colors.Gray600}}>2024.07.17</p>
                    </List>
                    <List>
                        <p style={{ ...Fonts['BodyMedium'], color: Colors.Blue500}}>자금 투자 계약 체결</p>
                        <p style={{ ...Fonts['BodyLarge'], color: Colors.Black}}>최승우님의 100,000원 자금 투자 계약이 체결되었어요.<br/>자금 투자 계획서를 다운받아 보관해 주세요.</p>
                        <p style={{ ...Fonts['BodySmall'], color: Colors.Gray600}}>2024.07.17</p>
                    </List>
                </div>
            </Content>
        </Alarmcontainer>
    )
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
    border-top: 1px solid #EEEEEE;
    height: fit-content;
    padding: 24px 0 24px 0;
    gap: 8px;
    animation: up 0.4s forwards;
`;