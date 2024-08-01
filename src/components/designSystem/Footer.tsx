import styled from 'styled-components';
import { Fonts } from '../../styles/fonts';
import { Colors } from '../../styles/colors';
import { Logo } from '../../assets';

export const Footer = () => {
  return (
    <FooterBox>
      <FooterContent>
        <FooterNav>
          <NavBox>
            <p style={Fonts['LabelSmall']}>서비스</p>
            <a
              href="/post"
              style={{ ...Fonts['BodyTiny'], color: Colors.Gray600 }}
            >
              사업 아이템
            </a>
          </NavBox>
          <NavBox>
            <p style={Fonts['LabelSmall']}>지원</p>
            <a href="#" style={{ ...Fonts['BodyTiny'], color: Colors.Gray600 }}>
              문의하기
            </a>
          </NavBox>
        </FooterNav>
        <FooterBottom>
          <LogoFrame>
            <div style={{ color: Colors.Gray600 }}>
              <Logo />
            </div>
            <Line />
            <a
              href="#"
              style={{ ...Fonts['LabelSmall'], color: Colors.Gray600 }}
            >
              이용약관
            </a>
            <Line />
            <a
              href="#"
              style={{ ...Fonts['LabelSmall'], color: Colors.Gray600 }}
            >
              개인정보처리방침
            </a>
          </LogoFrame>
          <p style={{ ...Fonts['BodyTiny'], color: Colors.Gray500 }}>
            대표자: asdf | 개인정보보호책임자: asdf | 이메일: asdf@asdf.com |
            문의: 010-0000-0000
          </p>
          <p style={{ ...Fonts['BodyTiny'], color: Colors.Gray500 }}>
            © 2024 FOUNDERZ All rights reserved.
          </p>
        </FooterBottom>
      </FooterContent>
    </FooterBox>
  );
};

const Line = styled.div`
  width: 1px;
  height: 16px;
  background-color: ${Colors.Gray100};
`;
const LogoFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const FooterBox = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 0;
  border-top: 1px solid ${Colors.Gray100};
  position: relative;
  background-color: ${Colors.White};
`;
const FooterContent = styled.section`
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 40px;
`;
const FooterNav = styled.div`
  display: flex;
  gap: 16px;
`;
const NavBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 180px;
`;
