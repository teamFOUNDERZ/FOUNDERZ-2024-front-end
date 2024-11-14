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
                        <p style={{ ...Fonts['BodyMedium'], color: Colors.Blue500}}>투자요청</p>
                        <p style={{ ...Fonts['BodyLarge'], color: Colors.Black}}>최승우님이 “토스"에 100,000원 투자를 원하고 있어요.</p>
                        <p style={{ ...Fonts['BodySmall'], color: Colors.Gray600}}>2024.07.17</p>
                    </List>
                    <List>
                        <p style={{ ...Fonts['BodyMedium'], color: Colors.Blue500}}>투자요청</p>
                        <p style={{ ...Fonts['BodyLarge'], color: Colors.Black}}>최승우님이 “토스"에 100,000원 투자를 원하고 있어요.</p>
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
    padding: 136px 40px 346px 40px;
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