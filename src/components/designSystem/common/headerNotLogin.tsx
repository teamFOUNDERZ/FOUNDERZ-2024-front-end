import React from "react";
import styled from "styled-components";
import Logo from "../../../assets/Img/TestingLogo.png";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";


function HeaderLogined() {
  const navigate = useNavigate();

  const Login = () => {
    navigate("/login");
  };

  const Signup = () => {
    navigate("/signup")
  };

  const Home = () => {
    navigate("/")
  };

  return (
    <Container>
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

export default HeaderLogined;

const Container = styled.div`
  width: 100%;
  height: 60px;
  background: white;
  border-bottom: 1px solid #eeeeee;
  margin: 0;
  padding: 0;
`;

const ButtonWrapper = styled.div`
  gap: 100px
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