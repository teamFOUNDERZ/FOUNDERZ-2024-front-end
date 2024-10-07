import { useState, ChangeEvent, KeyboardEvent, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IoSearch, IoClose } from 'react-icons/io5';
import { BackButton } from '../../components/BackButton';
import { Text } from '../../components/designSystem/Text';
import { Input as DSInput } from '../../components/designSystem/Input';
import { Button } from '../../components/designSystem/Button';

export default function Interest() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (event.target.value.trim()) {
      fetchSuggestions(event.target.value);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
      setSuggestions([]);
      setShowSuggestions(false);
      event.preventDefault();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setTags([...tags, suggestion]);
    setInputValue('');
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const removeTag = (indexToRemove: number) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const fetchSuggestions = (query: string) => {
    // Simulate an API call
    const simulatedSuggestions = [
      '이동통신',
      '이동통신 서비스',
      '이동통신 시스템',
      '이동통신 단말기',
      '기타 이동통신',
      '기타 이동통신기기',
      '친환경',
      '마케팅',
      '쇼핑',
      'IT',
    ].filter((item) => item.toLowerCase().includes(query.toLowerCase()));
    setSuggestions(simulatedSuggestions);
    setShowSuggestions(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Main>
      <SignupSection>
        <TitleBox>
          <BackButton />
          <div style={{ marginTop: '16px' }}>
            <Text font="TitleLarge">관심 분야</Text>
          </div>
          <Text font="BodyMedium" color="Gray500">
            관심있는 분야를 선택해 주세요.
          </Text>
        </TitleBox>
        <InputGroup ref={suggestionsRef}>
          <SearchWrapper>
            <DSInput
              type="text"
              id="name"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              required
              placeholder="관심 분야 검색"
            />
            <SearchIcon>
              <IoSearch />
            </SearchIcon>
            {showSuggestions && suggestions.length > 0 && (
              <SuggestionsList>
                {suggestions.map((suggestion, index) => (
                  <SuggestionItem
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </SuggestionItem>
                ))}
              </SuggestionsList>
            )}
          </SearchWrapper>
          <TagsContainer>
            {tags.map((tag, index) => (
              <Tag key={index}>
                {tag}
                <TagClose onClick={() => removeTag(index)}>
                  <IoClose />
                </TagClose>
              </Tag>
            ))}
          </TagsContainer>
        </InputGroup>
        <ButtonBox>
          <Button size="large" full type="button">
            회원가입
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

const InputGroup = styled.div`
  margin-bottom: 288px;
  width: 100%;
  position: relative;
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  color: #888888;
  font-size: 20px;
`;

const SuggestionsList = styled.ul`
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  max-height: 260px;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  margin-top: 8px;
`;

const SuggestionItem = styled.li`
  padding: 16px;
  cursor: pointer;
  border-bottom: 1px solid #eee;

  &:hover {
    background: #f6f6f6;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  background-color: #ebf0fa;
  border: 1px solid #bed2fa;
  padding: 10px 20px;
  border-radius: 100px;
  font-family: Pretendard;
  font-size: 16px;
  color: #1860f0;
  text-align: center;
`;

const TagClose = styled.div`
  margin-left: 8px;
  cursor: pointer;
  width: 16px;
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
