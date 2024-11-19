import styled from 'styled-components';
import { Logo } from '../../assets';
import { Colors } from '../../styles/colors';
import { getCookie } from '../../utils/cookies';
import { Button } from './Button';
import { Text } from './Text';

export const Header = () => {
  const accessToken = getCookie('accessToken');

  return (
    <HeaderBox>
      <HeaderContent>
        <Nav>
          <a href="/" style={{ color: Colors.Blue500 }}>
            <Logo />
          </a>
          <a href="/post">
            <Button kind="white">사업 아이템</Button>
          </a>
          <a href="/alarm">
            <Button kind="white">내 알림</Button>
          </a>
          <a href="/my">
            <Button kind="white">마이 페이지</Button>
          </a>
        </Nav>
        <UserBox>
          <Text>최승우님</Text>
        </UserBox>
      </HeaderContent>
    </HeaderBox>
  );
};

const ProfileImg = styled.img`
  width: 38px;
  height: 38px;
  object-fit: cover;
  border-radius: 20px;
  background-color: ${Colors.Gray50};
  border: 1px solid ${Colors.Gray100};
`;
const UserBox = styled.div`
  display: flex;
  gap: 8px;
`;
const HeaderBox = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${Colors.Gray100};
  position: fixed;
  background-color: ${Colors.White};
  z-index: 10;
`;
const HeaderContent = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 16px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
`;
