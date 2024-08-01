import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { Text } from '../../components/designSystem/Text';
import { Input } from '../../components/designSystem/Input';
import { Button } from '../../components/designSystem/Button';
import { useForm } from '../../hooks/useForm';
import { messageSend, messageVerify } from '../../apis/messageCheck';
import { signupStore } from '../../store/signupState';

export default function Signup() {
  const [check, setCheck] = useState<boolean | undefined>(undefined);

  const { updatePhone } = signupStore();
  const navigate = useNavigate();

  const { form, handleChange } = useForm<{
    phone: string;
    certification: string;
  }>({ phone: '', certification: '' });

  const phoneCheck = async () => {
    if (form.phone.length != 11) {
      alert('휴대폰 번호를 정확히 입력했는지 확인해 주세요.');
      return;
    }
    await messageSend(form.phone).then(() => alert('인증번호가 전송되었어요.'));
  };

  const phoneVerify = async () => {
    if (form.certification.length < 1) {
      alert('인증번호를 입력해 주세요.');
      return;
    }
    const isCheck = await messageVerify(form.phone, form.certification).catch(
      () => false
    );
    setCheck(isCheck);
  };

  const nextStep = () => {
    if (!check) {
      alert('인증을 먼저 완료해 주세요.');
      // return;
    }
    updatePhone(form.phone);
    navigate('/infomation');
  };

  return (
    <Main>
      <LoginSection>
        <TitleBox>
          <BackButton />
          <div style={{ marginTop: '16px' }}>
            <Text font="TitleLarge">회원가입</Text>
          </div>
          <Text font="BodyMedium" color="Gray500">
            회원가입 하여 서비스를 이용해 보세요.
          </Text>
        </TitleBox>
        <InputBox>
          <IdCheckWrapper>
            <Input
              placeholder="01012345678.."
              label="전화번호"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              style={{ flex: 1 }}
            />
            <Button
              size="medium"
              type="button"
              style={{ height: '56px' }}
              onClick={phoneCheck}
            >
              인증번호 발송
            </Button>
          </IdCheckWrapper>
          <TextFrame>
            <IdCheckWrapper>
              <Input
                placeholder="메시지로 받은 인증번호를 입력해 주세요.."
                label="인증번호"
                name="certification"
                required
                value={form.certification}
                onChange={handleChange}
                style={{ flex: 1 }}
              />
              <Button
                size="medium"
                type="button"
                style={{ height: '56px' }}
                onClick={phoneVerify}
              >
                인증
              </Button>
            </IdCheckWrapper>
            {check !== undefined ? (
              check ? (
                <Text font="LabelSmall" color="Blue500">
                  인증되었어요.
                </Text>
              ) : (
                <Text font="LabelSmall" color="CriticalMain">
                  인증번호를 다시 확인해 주세요.
                </Text>
              )
            ) : (
              <></>
            )}
          </TextFrame>
        </InputBox>
        <ButtonBox>
          <Button type="button" size="large" full onClick={nextStep}>
            다음
          </Button>
          <QuestionBox>
            <Text font="BodySmall" color="Gray500">
              이미 가입하셨나요?
            </Text>
            <a href="/login">
              <Text font="LabelMedium" color="Blue500">
                로그인
              </Text>
            </a>
          </QuestionBox>
        </ButtonBox>
      </LoginSection>
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

const QuestionBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
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

const LoginSection = styled.form`
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
