import styled, { keyframes } from 'styled-components';
import { Button } from '../../components/designSystem/Button';
import { Colors } from '../../styles/colors';

export default function MainPage() {
  return (
    <Main>
      <Image
        src="/images/1.webp"
        width={512}
        height={512}
        style={{ top: '170px', left: '72px' }}
      />
      <Image
        src="/images/2.webp"
        width={512}
        height={512}
        style={{ bottom: '128px', right: '80px', animationDelay: '0.1s' }}
      />
      <Image
        src="/images/3.webp"
        width={512}
        height={512}
        style={{ bottom: '-164px', right: '480px', animationDelay: '0.2s' }}
      />
      <TitleSection>
        <Title>파운더즈</Title>
        <SubTitle>창업을 준비하는 이들을 위한 투자 지원 서비스</SubTitle>
        <a href="/post">
          <Button size="large">사업 아이템 살펴보기</Button>
        </a>
      </TitleSection>
    </Main>
  );
}

const Bounce = keyframes`
  0% {
    opacity: 0;
    transform: translateY(240px) rotate(30deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotate(0);
  }
`;

const Image = styled.img`
  width: 512px;
  height: 512px;
  object-fit: contain;
  position: absolute;
  animation: ${Bounce} 2s infinite alternate cubic-bezier(0.075, 0.82, 0.165, 1);
  opacity: 0;
`;
const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 72px;
  height: calc(100dvh - 72px);
  background: linear-gradient(0deg, #dde8ff 0%, #fff 100%);
`;
const TitleSection = styled.section`
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: center;
  position: relative;
  animation: up 0.3s forwards;
`;
const Title = styled.h1`
  font-size: 96px;
  font-weight: 800;
  letter-spacing: -2.5%;
  line-height: 115px;
`;
const SubTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: ${Colors.Gray700};
  margin-bottom: 28px;
  line-height: 38px;
`;
