import React, { useState, ChangeEvent, KeyboardEvent, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Text } from '../designSystem/Text';
import { Input } from '../designSystem/Input';
import { AiOutlineClose } from 'react-icons/ai';
import { IoSearch } from 'react-icons/io5';
import MdEditor from '@uiw/react-md-editor';
import { getTag } from '../../apis/getTag';
import { writeBusinessItem } from '../../apis/business';
import { useNavigate } from 'react-router-dom';

// 사업 아이템 작성

function Writepost() {
  const Navigate = useNavigate();
  // 게시물 정보를 관리하는 상태 정의
  const [title, setTitle] = useState<string>('');
  const [introduce, SetIntrodcue] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [goal, setGoal] = useState<string>('');
  const [vision, setVision] = useState<string>('');

  // 태그 관련 상태 정의
  const [inputValue, setInputValue] = useState<string>(''); // 태그 입력 필드의 값
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false); // 추천 태그 표시 여부
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]); // 필터링된 추천 태그 목록
  const [tags, setTags] = useState<{ tag_id: string; tag_name: string }[]>([]); // 선택된 태그
  const [allTags, setAllTags] = useState<{ tag_id: string; tag_name: string }[]>([]); // 모든 태그 목록

  // 추천 태그 목록을 닫기 위한 참조
  const suggestionsRef = useRef<HTMLDivElement>(null);


  // 태그 데이터 가져오기 함수
  const fetchTags = async () => {
    try {
      const response = await getTag();
      const tagsData = response.data.data;
      if (Array.isArray(tagsData) && tagsData.length > 0) {
        setAllTags(tagsData); // tag_id와 tag_name을 모두 저장
        setFilteredSuggestions(tagsData.map(tag => tag.tag_name)); // 추천 태그 목록
        setShowSuggestions(true);
      } else {
        setFilteredSuggestions([]);
        setShowSuggestions(false);
      }
    } catch (error) {
      setFilteredSuggestions([]);
    }
  };

  localStorage.setItem('token', 'v2.local.0TP6esB9cx1fiivY2ejCrLvm4sMFiHI-gvWboCDd_lPEYOzMWeCOtj2eNX1sShxVGOmyHwFJL4S-64DliJDDYl2FV2NolS-XRPOSg5SLfTPZsPMi2LJA9O99YHd1lHvRfJwJGKHHDdNZeOAR4b_d7Fq33GcBnJiXjvek_cOdixDs97hOZv_ZGXcW3eKJ_lFsW-zLwHbeOzmW77pGkGyQvg.eyJraWQiOiI2NGQyMzQ5MC0wMTFhLTRjOGUtYjViMC02MTgyMGRhYWYwZGEifQ');

  // 폼 제출 함수
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('사업 이름:', title);
    console.log('한 줄 소개:', introduce);
    console.log('사업 소개:', content);
    console.log('목표:', goal);
    console.log('비전:', vision);
    console.log('태그:', tags.map(tag => tag.tag_id));

    const token = localStorage.getItem('token');

    if (!token) {
      console.error('토큰이 없습니다.');
      return;
    }

    try {
      const response = await writeBusinessItem({
        business_name: title,
        one_line_introduction: introduce,
        business_introduction: content,
        vision: vision,
        write_purpose: goal,
        tag_ids: tags.map(tag => tag.tag_id), // tag_id만 전달
      }, token);
      console.log('사업 아이템 작성 성공:', response);
      Navigate('/post');
    } catch (error: any) {
      console.error('사업 아이템 작성 실패:', error);
      alert('작성에 실패하였습니다. 한 번 더 자세히 확인해주세요.');
      if (error.response) {
        console.error('에러:', error.response.data);
      }
    }
  };


  // 태그 삭제 함수
  const handleRemoveTag: any = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  // 태그 입력 필드에서 Enter 키를 눌렀을 때 호출
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      const newTag = inputValue.trim();
      const existingTag = allTags.find((tag) => tag.tag_name === newTag); // tag_name으로 찾기

      if (existingTag) {
        setTags((prevTags) => [...prevTags, { tag_id: existingTag.tag_id, tag_name: existingTag.tag_name }]);
      }

      setInputValue('');
      setShowSuggestions(false);
      event.preventDefault();
    }
  };

  // 태그 입력 필드 값 변경 시 호출
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    fetchSuggestions(value);
  };

  // 추천 태그 필터링 함수
  const fetchSuggestions = (query: string) => {
    if (query.trim()) {
      const filtered = allTags.filter((tag) =>
        tag.tag_name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered.map(tag => tag.tag_name));
      setShowSuggestions(true);
    } else {
      // 빈 입력값이여도 추천 목록 초기화
      setFilteredSuggestions([]);
      // setShowSuggestions(false);
    }
  };

  // 
  const handleSuggestionClick = (suggestion: string) => {
    const existingTag = allTags.find((tag) => tag.tag_name === suggestion);
  
    if (existingTag) {
      setTags((prevTags) => [
        ...prevTags,
        { tag_id: existingTag.tag_id, tag_name: existingTag.tag_name },
      ]);
    }

    setInputValue(''); 
    setShowSuggestions(false);
    console.log(suggestion);
  };


  return (
    <>
      <BannerFrame>
        <BannerSection>
          <Text font="TitleLarge" color="White">사업 아이템</Text>
          <Text font="BodyLarge" color="White">
            사업 아이템을 살펴보고, 마음에 드는 사업에 투자해 보세요.
          </Text>
          <PostImg src="/images/write.webp" />
        </BannerSection>
      </BannerFrame>

      <Main>
        <WritepostContainer>
          <Form onSubmit={handleSubmit} autoComplete='off'>
            <InputContainer>
              <Label>사업 이름</Label>
              <Input
                type="text"
                value={title}
                style={{ width: '65%' }}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="사업 이름을 입력해주세요."
                fontSize='18px'
              />
            </InputContainer>

            <InputContainer>
              <Label>한 줄 소개</Label>
              <Input
                type="text"
                value={introduce}
                style={{ width: '65%' }}
                onChange={(e) => SetIntrodcue(e.target.value)}
                placeholder="사업에 대해서 한 줄로 소개해 주세요."
                fontSize='18px'
              />
            </InputContainer>

            <InputContainer>
              <Label>사업 소개</Label>
              <StyledEditorContainer>
                <MdEditor
                  value={content}
                  onChange={(value) => setContent(value || '')}
                  height={400}
                  preview="edit"
                  data-color-mode="light"
                  textareaProps={{
                    placeholder: "사업 소개를 입력해주세요.."
                  }}
                  
                />
              </StyledEditorContainer>
            </InputContainer>

            <InputContainer>
              <Label>비전</Label>
              <Input
                type="text"
                value={vision}
                onChange={(e) => setVision(e.target.value)}
                placeholder="사업의 비전을 입력해주세요."
                fontSize='18px'
              />
            </InputContainer>

            <InputContainer>
              <Label>작성 목적</Label>
              <Input
                type="text"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="사업 아이템의 작성 목적을 알려주세요."
                fontSize='18px'
              />
            </InputContainer>

            <InputGroup ref={suggestionsRef}>
              <TagInputContainer>
                <SearchWrapper>
                  <Label>분야 태그</Label>
                  <Input
                    type="text"
                    id="name"
                    style={{ width: '65%' }}
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    onFocus={() => fetchTags()}
                    placeholder="분야 태그를 추가해보세요."
                    fontSize='18px'
                  />
                  <SearchIcon>
                    <IoSearch />
                  </SearchIcon>
                  {showSuggestions && (
                    <SuggestionsList>
                      {filteredSuggestions.length > 0 ? (
                        filteredSuggestions.map((suggestion) => (
                          <SuggestionItem
                            key={suggestion}
                            onClick={() => handleSuggestionClick(suggestion)}
                          >
                            {suggestion}
                          </SuggestionItem>
                        ))
                      ) : (
                        <SuggestionItem>존재하지 않는 분야입니다</SuggestionItem>
                      )}
                    </SuggestionsList>
                  )}
                </SearchWrapper>
                <TagContainer>
                  {tags.map((tag, index) => (
                    <TagItem key={index}>
                      <Tag>#{tag.tag_name}</Tag>
                      <CloseButton type="button" onClick={() => handleRemoveTag(index)}>
                        <AiOutlineClose id="close" />
                      </CloseButton>
                    </TagItem>
                  ))}
                </TagContainer>
              </TagInputContainer>
            </InputGroup>

            <SubmitButton type="submit">사업 아이템 게시하기</SubmitButton>
          </Form>
        </WritepostContainer>
      </Main>
    </>
  );
}

export default Writepost;


const SearchIcon = styled.div`
  position: absolute;
  top: 65%;
  right: 37%;
  transform: translateY(-50%);
  color: #888888;
  font-size: 20px;
`;

const SuggestionsList = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  max-height: 200px;
  max-width: 65%;
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

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const InputGroup = styled.div`
  position: relative;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  min-height: calc(100dvh - 328px);
  animation: up 0.4s forwards;
`;

const StyledEditorContainer = styled.div`
  .w-md-editor {
    background-color: #f6f6f6; 
    --md-editor-border-color: #eee;
    box-shadow: 0 0 0 1px var(--md-editor-border-color);
    font-size: 18px;
    border-radius: 12px;
  }
  .w-md-editor-toolbar {
    border-radius: 12px 12px 0 0;
    padding: 8px;
  }
  .w-md-editor-text {
    padding: 16px;
  }
  .w-md-editor-text-pre > code {
      font-size: 18px !important;  
    }
  .w-md-editor-text-input {
    font-size: 18px;
    &::placeholder {
      font-weight: 500;
    }
  }
  .w-md-editor-preview {
    background-color: #ffffff; 
    box-shadow: 0 0 0 1px #eee;
  }
  .w-md-editor-toolbar {
    border-bottom: 1px solid #eee;
  }

  .w-md-editor-preview p{
    font-size: 18px !important;
  }


  .w-md-editor-toolbar button {
    width: 40px;
    height: 40px;
  }

 
  .w-md-editor-toolbar svg {
    width: 20px;
    height: 20px;
  }
 

  
`;

const BannerFrame = styled.div`
  display: flex;
  height: 256px;
  width: 100%;
  padding-top: 72px;
  justify-content: center;
  background-color: ${Colors.Blue500};
  overflow: hidden;
`;

const BannerSection = styled.section`
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 40px;
  justify-content: center;
  position: relative;
`;

const PostImg = styled.img`
  width: 512px;
  height: 512px;
  object-fit: contain;
  position: absolute;
  top: -48px;
  right: -40px;
  animation: up 0.6s forwards;
`;

const WritepostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px 40px 120px; 
  max-width: 1280px;
  width: 100%;
`;


const InputContainer = styled.div`
  width: 100%;
  margin: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Label = styled.div`
  width: 50%;
  text-align: left;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 500;
`;

const TagInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const TagItem = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: max-content;
  padding: 8px 20px;
  height: 25px;
  border-radius: 30px;
  border: 1px solid #bed2fa;
  background: #ebf0fa;
  font-size: 16px;
`;

const Tag = styled.p`
  color: #1860f0;
  font-size: 15px;
`;

const CloseButton = styled.button`
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  float: right;
  font-size: 16px;
  display: flex;
  justify-content: center;
  #close {
    color: #1860f0;
    margin: 0;
    padding: 0;
  }
`;
const SubmitButton = styled.button`
  width: 100%;
  height: 60px;
  padding: 10px;
  background-color: #1860f0;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
`;

