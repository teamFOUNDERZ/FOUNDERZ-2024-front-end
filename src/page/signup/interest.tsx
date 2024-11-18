import { useState, ChangeEvent, KeyboardEvent, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IoSearch, IoClose } from 'react-icons/io5';
import { BackButton } from '../../components/BackButton';
import { Text } from '../../components/designSystem/Text';
import { Input as DSInput } from '../../components/designSystem/Input';
import { Button } from '../../components/designSystem/Button';
import { getTag } from '../../apis/getTag';
import { signupStore } from '../../store/signupState';
import { signup, UserType } from '../../apis/signup';

export default function Interest() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>('');
  const [tags, setTags] = useState<{ tag_id: string; tag_name: string }[]>([]);
  const [allTags, setAllTags] = useState<{ tag_id: string; tag_name: string }[]>([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [noMatchFound, setNoMatchFound] = useState<boolean>(false);
  const { account_id, password, name, type, phone_number, tag_ids, updateTag } = signupStore();

  const suggestionsRef = useRef<HTMLDivElement>(null);

  const fetchTags = async () => {
    try {
      const response = await getTag();
      const tagsData = response.data.data;
      if (Array.isArray(tagsData) && tagsData.length > 0) {
        setAllTags(tagsData);
        setFilteredSuggestions(tagsData.map(tag => tag.tag_name));
        setShowSuggestions(true);
      } else {
        setFilteredSuggestions([]);
        setShowSuggestions(false);
      }
    } catch (error) {
      setFilteredSuggestions([]);
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  const fetchSuggestions = (query: string) => {
    if (query.trim()) {
      const filtered = allTags
        .filter(tag => tag.tag_name.toLowerCase().includes(query.toLowerCase()))
        .map(tag => tag.tag_name);
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
      setNoMatchFound(filtered.length === 0);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      setNoMatchFound(false);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    fetchSuggestions(value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      const newTag = inputValue.trim();
      const existingTag = allTags.find(tag => tag.tag_name === newTag);

      if (existingTag) {
        setTags((prevTags) => [...prevTags, existingTag]);
        updateTag([...tag_ids, existingTag.tag_id]);
      } else {
        setNoMatchFound(true);
      }

      setInputValue('');
      setShowSuggestions(false);
      event.preventDefault();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    const selectedTag = allTags.find(tag => tag.tag_name === suggestion);
    if (selectedTag) {
      setTags((prevTags) => [...prevTags, selectedTag]);
      updateTag([...tag_ids, selectedTag.tag_id]);
    }
    setInputValue('');
    setShowSuggestions(false);
  };

  const removeTag = (indexToRemove: number) => {
    const updatedTags = tags.filter((_, index) => index !== indexToRemove);
    setTags(updatedTags);
    updateTag(updatedTags.map(tag => tag.tag_id));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await signup({
        account_id,
        name,
        phone_number,
        password,
        tag_ids: tags.map(tag => tag.tag_id),
        type: type as UserType,
      });
  
      if (response.status === 201) {
        navigate('/');
      }
    } catch (error) {
      console.error('회원가입에 실패하였습니다', error);
    }
  };

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
              autoComplete="off"
            />
            <SearchIcon>
              <IoSearch />
            </SearchIcon>
            {showSuggestions && (
              <SuggestionsList>
                {filteredSuggestions.length > 0 ? (
                  filteredSuggestions.map((suggestion) => (
                    <SuggestionItem key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
                      {suggestion}
                    </SuggestionItem>
                  ))
                ) : (
                  <SuggestionItem>존재하지 않는 분야입니다</SuggestionItem>
                )}
              </SuggestionsList>
            )}
          </SearchWrapper>
          <TagsContainer>
            {tags.map((tag, index) => (
              <Tag key={tag.tag_id}>
                {tag.tag_name}
                <TagClose onClick={() => removeTag(index)}>
                  <IoClose />
                </TagClose>
              </Tag>
            ))}
          </TagsContainer>
        </InputGroup>
        <ButtonBox>
          <Button size="large" full type="button" onClick={handleSubmit}>
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
