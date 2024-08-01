import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Logo } from '../../assets';
import { Button } from './Button';
import { getCookie } from '../../utils/cookies';

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
        </Nav>
        <UserBox>
          {accessToken ? (
            <ProfileImg src="/images/3.webp" />
          ) : (
            <>
              <a href="/signup">
                <Button kind="white">회원가입</Button>
              </a>
              <a href="/login">
                <Button>로그인</Button>
              </a>
            </>
          )}
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
