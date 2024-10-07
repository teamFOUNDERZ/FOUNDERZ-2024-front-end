import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { Text } from '../../components/designSystem/Text';
import { Input } from '../../components/designSystem/Input';
import { Button } from '../../components/designSystem/Button';
import { useForm } from '../../hooks/useForm';
import { signupStore } from '../../store/signupState';

export default function Information() {
  const [check, setCheck] = useState<boolean | undefined>(undefined);

  const { updateInfo } = signupStore();
  const navigate = useNavigate();

  const { form, handleChange } = useForm<{
    id: string;
    password: string;
    checkPassword: string;
  }>({ id: '', password: '', checkPassword: '' });

  const handleIdCheck = () => {
    if (form.id.length < 1) {
      alert('아이디를 입력해 주세요.');
      return;
    }
    setCheck(true);
  };

  const nextStep = () => {
    if (form.password.length < 1) {
      alert('비밀번호를 입력해 주세요.');
      // return;
    }
    if (form.password !== form.checkPassword) {
      alert('재입력한 비밀번호가 일치하지 않아요.');
      // return;
    }
    updateInfo({ account_id: form.id, password: form.password });
    navigate('/signupType');
  };

  return (
    <Main>
      <SignupSection>
        <TitleBox>
          <BackButton disabled />
          <div style={{ marginTop: '16px' }}>
            <Text font="TitleLarge">기본 정보</Text>
          </div>
          <Text font="BodyMedium" color="Gray500">
            기본 정보를 입력해 주세요.
          </Text>
        </TitleBox>
        <InputBox>
          <TextFrame>
            <IdCheckWrapper>
              <Input
                placeholder="아이디를 입력해 주세요.."
                label="아이디"
                name="id"
                required
                value={form.id}
                onChange={handleChange}
                style={{ flex: 1 }}
              />
              <Button
                size="medium"
                style={{ height: '56px' }}
                type="button"
                onClick={handleIdCheck}
              >
                중복 체크
              </Button>
            </IdCheckWrapper>
            {check !== undefined ? (
              check ? (
                <Text font="LabelSmall" color="Blue500">
                  사용 가능한 아이디 입니다.
                </Text>
              ) : (
                <Text font="LabelSmall" color="CriticalMain">
                  이미 사용중인 아이디 입니다.
                </Text>
              )
            ) : (
              <></>
            )}
          </TextFrame>
          <Input
            placeholder="비밀번호를 입력해 주세요.."
            label="비밀번호"
            name="password"
            required
            type="password"
            value={form.password}
            onChange={handleChange}
          />
          <Input
            placeholder="비밀번호를 입력해 주세요.."
            label="비밀번호 확인"
            name="checkPassword"
            required
            type="password"
            value={form.checkPassword}
            onChange={handleChange}
          />
        </InputBox>
        <ButtonBox>
          <Button type="button" size="large" full onClick={nextStep}>
            다음
          </Button>
        </ButtonBox>
      </SignupSection>
    </Main>
  );
}

const TextFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const IdCheckWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SignupSection = styled.form`
  display: flex;
  max-width: 480px;
  width: 100%;
  flex-direction: column;
  gap: 64px;
  padding: 80px 40px;
  animation: up 0.3s forwards;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  padding-top: 72px;
  min-height: calc(100dvh - 72px);
`;
