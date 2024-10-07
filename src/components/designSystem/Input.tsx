import { ComponentProps, useState } from 'react';
import styled from 'styled-components';
import { Text } from './Text';
import { Colors } from '../../styles/colors';
import { Hide, Show } from '../../assets';

type Props = ComponentProps<'input'> & {
  label?: string;
};

export const Input = ({ label, type = 'text', style, ...props }: Props) => {
  const [passShow, setPassShow] = useState<boolean>(false);

  return (
    <InputFrame style={style}>
      {label && (
        <Text font="LabelMedium" color="Gray800">
          {label}
        </Text>
      )}
      <InputLabel>
        <InputContent
          type={type === 'password' ? (!passShow ? 'password' : 'text') : type}
          {...props}
        />
        {type === 'password' &&
          (passShow ? (
            <div
              style={{ color: Colors.Gray600, cursor: 'pointer' }}
              onClick={() => setPassShow(false)}
            >
              <Show size={20} />
            </div>
          ) : (
            <div
              style={{ color: Colors.Gray600, cursor: 'pointer' }}
              onClick={() => setPassShow(true)}
            >
              <Hide size={20} />
            </div>
          ))}
      </InputLabel>
    </InputFrame>
  );
};

const InputContent = styled.input`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: black;
  width: 100%;
  border: none;
  background: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${Colors.Gray500};
  }
`;
const InputLabel = styled.label`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 16px;
  background-color: ${Colors.Gray50};
  border: 1px solid ${Colors.Gray100};
  border-radius: 12px;

  &:focus-within {
    border: 1px solid ${Colors.Blue500};
  }
`;
const InputFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
