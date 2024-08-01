import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { Text } from '../../components/designSystem/Text';
import { Input } from '../../components/designSystem/Input';
import { Button } from '../../components/designSystem/Button';
import { useForm } from '../../hooks/useForm';
import { signupStore } from '../../store/signupState';

export default function SignupType() {
  const navigate = useNavigate();
  const [isIndividual, setIsIndividual] = useState(true);
  const [inputLabel, setInputLabel] = useState('이름');
  const [inputPlaceholder, setInputPlaceholder] =
    useState('이름을 입력해 주세요..');

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsIndividual(event.target.value === '개인');
  };

  const { updateUserType } = signupStore();

  const { form, handleChange } = useForm<{
    name: string;
  }>({ name: '' });

  useEffect(() => {
    if (isIndividual) {
      setInputLabel('이름');
      setInputPlaceholder('이름을 입력해 주세요..');
    } else {
      setInputLabel('기업 이름');
      setInputPlaceholder('기업 이름을 입력해 주세요..');
    }
  }, [isIndividual]);

  const nextStep = () => {
    updateUserType(isIndividual ? 'PERSONAL' : 'COMPANY');
    navigate('/interest');
  };

  return (
    <Main>
      <SignupSection>
        <TitleBox>
          <BackButton disabled />
          <div style={{ marginTop: '16px' }}>
            <Text font="TitleLarge">가입 유형</Text>
          </div>
          <Text font="BodyMedium" color="Gray500">
            개인이신가요, 기업이신가요?
          </Text>
        </TitleBox>
        <ToggleContainer>
          <ToggleInput
            type="radio"
            id="toggle-switch1"
            name="switch"
            value="개인"
            defaultChecked
            onChange={handleToggleChange}
          />
          <ToggleLabel htmlFor="toggle-switch1">개인</ToggleLabel>
          <ToggleInput
            type="radio"
            id="toggle-switch2"
            name="switch"
            value="기업"
            onChange={handleToggleChange}
          />
          <ToggleLabel htmlFor="toggle-switch2">기업</ToggleLabel>
          <Span isIndividual={isIndividual} />
        </ToggleContainer>
        <InputBox>
          <Input
            placeholder={inputPlaceholder}
            label={inputLabel}
            name="name"
            required
            type="text"
            value={form.name}
            onChange={handleChange}
          />
        </InputBox>
        <ButtonBox>
          <Button size="large" full onClick={nextStep}>
            다음
          </Button>
        </ButtonBox>
      </SignupSection>
    </Main>
  );
}

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

const ToggleContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 60px;
  margin-bottom: 32px;
  background-color: #f6f6f6;
  border-radius: 12px;
`;

const ToggleLabel = styled.label`
  display: inline-block;
  width: 50%;
  text-align: center;
  line-height: 60px;
  color: #666666;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  z-index: 2;
`;

interface SpanProps {
  isIndividual: boolean;
}

const Span = styled.span<SpanProps>`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 50%;
  height: 51px;
  border-radius: 10px;
  background-color: #ffffff;
  transition: all 0.3s ease-in-out;
  z-index: 1;
  transform: ${(props) =>
    props.isIndividual
      ? 'translateX(0)'
      : 'translateX(96.5%)'}; /* updated transform */
`;

const ToggleInput = styled.input`
  display: none;

  &:checked + ${ToggleLabel} {
    color: #1860f0;
  }
`;
