import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import BannerImg from '../../assets/Img/Item.png';
import MdEditor from '@uiw/react-md-editor';

function Writepost() {
  const [title, setTitle] = useState<string>('');
  const [introduce, SetIntrodcue] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [goal, setGoal] = useState<string>('');
  const [tag, setTag] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleAddTag = () => {
    if (tag.trim() !== '' && !tags.includes(tag.trim())) {
      setTags([...tags, tag.trim()]);
      setTag('');
    }
  };

  const handleRemoveTag = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  return (
    <>
      <BannerContainer>
        <BannerItemWrapper>
          <Left>
            <BannerTitle>사업 아이템 작성</BannerTitle>
            <BannerSubTitle>
              투자를 받고자 하는 자신의 사업 아이템을 작성해보세요.
            </BannerSubTitle>
          </Left>
          <Right>
            <img src={BannerImg} width={'80%'} alt="banner" />

            <img src={BannerImg} width={'80%'} />
          </Right>
        </BannerItemWrapper>
      </BannerContainer>
      <WritepostContainer>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Label>사업 이름</Label>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="사업 이름을 입력해주세요."
            />
          </InputContainer>

          <InputContainer>
            <Label>한 줄 소개</Label>
            <Input
              type="text"
              value={introduce}
              onChange={(e) => SetIntrodcue(e.target.value)}
              placeholder="사업에 대해서 한 줄로 소개해 주세요."
            />
          </InputContainer>

          <InputContainer>
            <Label>사업 소개</Label>
            <MdEditor
              value={content}
              onChange={(value) => setContent(value || '')}
              height={400}
              // placeholder="사업 소개를 입력해주세요."
            />
          </InputContainer>

          <InputContainer>
            <Label>비전</Label>
            <LongInput
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="사업의 비전을 입력해주세요."
            />
          </InputContainer>

          <InputContainer>
            <Label>작성 목적</Label>
            <LongInput
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="사업 아이템의 작성 목적을 알려주세요."
            />
          </InputContainer>

          <InputContainer>
            <Label>분야 태그</Label>
            <Input
              type="text"
              placeholder="분야 태그를 추가해보세요."
              onChange={(e) => setTag(e.target.value)}
              value={tag}
              onKeyDown={handleKeyDown}
            />
          </InputContainer>
          <TagContainer>
            {tags.map((tag, index) => (
              <TagItem key={index}>
                <Tag>#{tag}</Tag>
                <CloseButton onClick={() => handleRemoveTag(index)}>
                  <AiOutlineClose id="close" />
                </CloseButton>
              </TagItem>
            ))}
          </TagContainer>

          <SubmitButton type="submit">사업 아이템 게시하기</SubmitButton>
        </Form>
      </WritepostContainer>
    </>
  );
}

export default Writepost;

const BannerContainer = styled.div`
  padding-top: 120px;
  width: 100%;
  height: 200px;
  background: #1860f0;
  overflow: hidden;
`;

const BannerItemWrapper = styled.div`
  width: 1200px;
  height: 200px;
  margin: 0 auto;
`;

const Left = styled.div`
  float: left;
  height: 100%;
  padding-top: 50px;
`;

const Right = styled.div`
  float: right;
`;

const BannerTitle = styled.p`
  font-size: 30px;
  color: white;
  margin: 20px;
`;

const BannerSubTitle = styled.p`
  font-size: 15px;
  color: white;
  margin: 20px;
`;

const WritepostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const InputContainer = styled.div`
  width: 1200px;
  margin: 0;
`;

const Form = styled.form`
  width: 1200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  gap: 10px;
`;

const Label = styled.div`
  width: 50%;
  text-align: left;
  margin-bottom: 15px;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 65%;
  height: 40px;
  padding: 10px;
  background: #f6f6f6;
  border: 1px solid #eee;
  border-radius: 7px;
  outline: none;
  font-size: 16px;
  box-sizing: border-box;

  &:hover {
    background: #ececec;
    transition: 200ms;
  }

  &:focus {
    background: white;
  }
`;

const LongInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  background: #f6f6f6;
  border: 1px solid #eee;
  border-radius: 7px;
  outline: none;
  font-size: 16px;
  box-sizing: border-box;

  &:hover {
    background: #ececec;
    transition: 200ms;
  }

  &:focus {
    background: white;
  }
`;

const TagContainer = styled.div``;
const MarkDownContainer = styled.div`
  width: 100%;
  height: 400px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Textarea = styled.textarea`
  width: 50%;
  height: 400px;
  padding: 10px;
  margin-bottom: 20px;
  background: #f6f6f6;
  border: 1px solid #eee;
  border-radius: 7px;
  font-size: 16px;
  box-sizing: border-box;
  resize: none;
  outline: none;

  &:hover {
    background: #ececec;
    transition: 200ms;
  }

  &:focus {
    background: white;
  }
`;

const MarkDown = styled.div`
  width: 50%;
  height: 400px;
  padding: 10px;
  margin-bottom: 20px;
  background: white;
  border: 1px solid #eee;
  border-radius: 10px;
`;

const Button = styled.button`
  width: 100%;
  height: 60px;
  padding: 10px;
  background-color: #1860f0;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const TagConatainer = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  gap: 10px;
`;

const TagItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  padding: 5px 10px;
  height: 25px;
  border-radius: 30px;
  border: 1px solid #bed2fa;
  background: #ebf0fa;
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
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

export {};
