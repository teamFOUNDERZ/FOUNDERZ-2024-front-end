import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { Text } from '../../components/designSystem/Text';
import { Input } from '../../components/designSystem/Input';
import { Button } from '../../components/designSystem/Button';
import { useForm } from '../../hooks/useForm';
import { signupStore } from '../../store/signupState';
import { idAuthn } from '../../apis/idAuthn';
import { AxiosError } from 'axios';

export default function Information() {
  const [check, setCheck] = useState<boolean | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordMatchError, setPasswordMatchError] = useState<string | null>(null);

  const { updateInfo, updateId, updatePassword } = signupStore();
  const navigate = useNavigate();

  const { form, handleChange } = useForm<{
    id: string;
    password: string;
    checkPassword: string;
  }>({ id: '', password: '', checkPassword: '' });

  const handleIdCheck = async () => {
    if (!/^[a-zA-Z0-9]{4,20}$/.test(form.id)) {
      setErrorMessage('올바른 형식의 아이디를 입력해 주세요.');
      setCheck(undefined);
      return;
    }
  
    try {
      const response = await idAuthn(form.id);
      console.log('서버 응답:', response);
  
      if (response.status === 200) {
        setCheck(true);
        console.log('사용 가능한 아이디입니다.');
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log('서버 오류:', error.response);
        if (error.response?.status === 409) {
          setCheck(false);
          console.log('이미 사용중인 아이디입니다.');
        } else {
          setErrorMessage('아이디 검증에 실패했습니다.');
          setCheck(undefined);
        }
      } else {
        console.log('알 수 없는 오류:', error);
        setErrorMessage('알 수 없는 오류가 발생했습니다.');
        setCheck(undefined);
      }
    }
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        '비밀번호는 8~20자의 영문자, 숫자, 특수문자(!@#$%^&*)를 포함해야 합니다.'
      );
    } else {
      setPasswordError(null);
    }
  };

  const validatePasswordMatch = (checkPassword: string) => {
    if (checkPassword !== form.password) {
      setPasswordMatchError('비밀번호가 일치하지 않습니다.');
    } else {
      setPasswordMatchError(null);
    }
  };

  const nextStep = () => {
    if (form.password.length < 1) {
      setPasswordError('비밀번호를 입력해 주세요.');
      return;
    }

    if (passwordError || passwordMatchError || check === false || check === undefined) {
      return;
    }

    updateId(form.id);
    updatePassword(form.password);
    navigate('/signupType');
  };

  return (
    <Main>
      <SignupSection>
        <TitleBox>
          <BackButton />
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
                placeholder="아이디를 입력해 주세요."
                label="아이디"
                name="id"
                required
                value={form.id}
                onChange={(e) => {
                  handleChange(e);
                  setErrorMessage(null);
                }}
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
            {check !== undefined && !errorMessage && (
              <Text font="LabelSmall" color={check ? 'Blue500' : 'CriticalMain'}>
                {check ? '사용 가능한 아이디 입니다.' : '이미 사용중인 아이디 입니다.'}
              </Text>
            )}
            {errorMessage && <Text font="LabelSmall" color="CriticalMain">{errorMessage}</Text>}
          </TextFrame>

          <TextFrame>
            <Input
              placeholder="비밀번호를 입력해 주세요."
              label="비밀번호"
              name="password"
              required
              type="password"
              value={form.password}
              onChange={(e) => {
                handleChange(e);
                validatePassword(e.target.value);
              }}
            />
            {passwordError && <Text font="LabelSmall" color="CriticalMain">{passwordError}</Text>}
          </TextFrame>

          <TextFrame>
            <Input
              placeholder="비밀번호를 입력해 주세요."
              label="비밀번호 확인"
              name="checkPassword"
              required
              type="password"
              value={form.checkPassword}
              onChange={(e) => {
                handleChange(e);
                validatePasswordMatch(e.target.value);
              }}
            />
            {passwordMatchError && <Text font="LabelSmall" color="CriticalMain">{passwordMatchError}</Text>}
          </TextFrame>
        </InputBox>
        <ButtonBox>
          <Button
            type="button"
            size="large"
            full
            onClick={nextStep}
            disabled={!form.id || !form.password || check === undefined || check === false || (passwordError !== null) || (passwordMatchError !== null)}
          >
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
