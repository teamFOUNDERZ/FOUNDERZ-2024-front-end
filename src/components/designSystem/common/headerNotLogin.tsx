import React from "react";
import styled from "styled-components";
import Logo from "../../../assets/Img/TestingLogo.png";
import { useNavigate } from "react-router-dom";

function HeaderNotLogin() {
  const navigate = useNavigate();

  const toLogin = () => {
    navigate("/login");
  };

  const toSignUp = () => {
    navigate("/signup");
  };

  const Post = () => {
    navigate("/Post");
  };

  return (
    <HeaderBox>
      <HeaderContent>
        <Nav>
          <a href="/" style={{ color: Colors.Blue500 }}>
            <Logo />
          </a>
        </Nav>
        <UserBox>
            <>
              <a href="/signup">
                <Button kind="white">회원가입</Button>
              </a>
              <a href="/login">
                <Button>로그인</Button>
              </a>
            </>
        </UserBox>
      </HeaderContent>
    </HeaderBox>
  );
}

export default HeaderNotLogin;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  background: white;
  border-bottom: 1px solid #eeeeee;
`;

const ItemWrapper = styled.div`
  width: 1200px;
  height: 60px;
  margin: 0 auto;
`;

const LeftWrapper = styled.div`
  width: max-content;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  float: left;
`;

const NavButton = styled.button`
  display: flex;
  justify-content: center;
  width: max-content;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
`;

const RightWrapper = styled.div`
  width: max-content;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  float: right;

  #profile {
    font-size: 30px;
    background: #ececec;
    border-radius: 50%;
  }
`;

const LoginButton = styled.button`
  width: max-content;
  padding: 7px 10px;
  color: white;
  text-align: center;
  border-radius: 10px;
  background: #1860f0;
  border: none;
  cursor: pointer;
`;
