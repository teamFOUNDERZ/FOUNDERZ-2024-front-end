import styled from "styled-components";

export function Box() {
    return(
        <ContentContainer>
            <SemiBold24>비젼</SemiBold24>
            <Reguler18>이전으로 돌아갈 수 없는 새로운 은행 경험을 제공한다</Reguler18>
        </ContentContainer>
    )
}

const ContentContainer = styled.div`
    padding: 24px;
    background-color: #F6F6F6;
    border: 1px solid #EEEEEE;
    border-radius: 16px;
`;

const SemiBold24 = styled.p`
    margin-bottom: 8px;
    font-size: 24px;
    font-weight: 500;
`;

const Reguler18 = styled.p`
    font-size: 18px;
    font-weight: 300;
`;