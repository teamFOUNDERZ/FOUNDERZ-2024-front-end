import styled from 'styled-components';
import { Arrow_Left } from '../assets';
import { Colors } from '../styles/colors';
import { useNavigate } from 'react-router-dom';
import { ComponentProps } from 'react';

export const BackButton = ({ ...props }: ComponentProps<'button'>) => {
  const navigate = useNavigate();

  return (
    <ButtonStyle onClick={() => navigate(-1)} {...props}>
      <Arrow_Left />
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  width: 40px;
  height: 40px;
  padding: 8px;
  border-radius: 12px;
  border: 1px solid ${Colors.Gray100};
  background-color: white;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.Gray50};
  }

  &:hover svg {
    transform: translateX(-4px);
  }

  & > svg {
    transition: 0.2s;
  }
`;
