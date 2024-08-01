import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Text } from '../../components/designSystem/Text';
import { Button } from '../../components/designSystem/Button';
import { useEffect, useState } from 'react';
import { getPost, PostListType } from '../../apis/getPost';

const dummy = [
  {
    business_id: 1,
    business_name: '삼성전자',
    one_liner:
      '반도체, 전자제품, 디스플레이와 통신장비, 전자 부품들을 설계, 제조하는 종합 반도체 기업이 되려고 합니다.',
    total_investment: 12450000,
    tags: [
      { id: 1, tagName: '종합 반도체' },
      { id: 2, tagName: '디스플레이' },
      { id: 3, tagName: '전자 부품 제조' },
    ],
  },
  {
    business_id: 2,
    business_name: '토스',
    one_liner:
      '공인인증서나 보안 매체 없이 앱을 통해 빠르고 손쉽게 송금이 가능한 서비스입니다.',
    total_investment: 500000,
    tags: [{ id: 1, tagName: '금융' }],
  },
];

export default function PostPage() {
  const [itemData, setItemData] = useState<PostListType[]>([
    {
      business_id: 1,
      business_name: '삼성전자',
      one_liner:
        '반도체, 전자제품, 디스플레이와 통신장비, 전자 부품들을 설계, 제조하는 종합 반도체 기업이 되려고 합니다.',
      total_investment: 12450000,
      tags: [
        { id: 1, tagName: '종합 반도체' },
        { id: 2, tagName: '디스플레이' },
        { id: 3, tagName: '전자 부품 제조' },
      ],
    },
    {
      business_id: 2,
      business_name: '토스',
      one_liner:
        '공인인증서나 보안 매체 없이 앱을 통해 빠르고 손쉽게 송금이 가능한 서비스입니다.',
      total_investment: 500000,
      tags: [{ id: 1, tagName: '금융' }],
    },
  ]);

  const getData = async () => {
    const data = await getPost();
    setItemData(data);
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <BannerFrame>
        <BannerSection>
          <PostImg src="/images/post.webp" />
          <Text font="TitleLarge">사업 아이템</Text>
          <Text font="BodyLarge" color="Gray600">
            사업 아이템을 살펴보고, 마음에 드는 사업에 투자해 보세요.
          </Text>
        </BannerSection>
      </BannerFrame>
      <Main>
        <PostSection>
          <AllInfo>
            <Text font="LabelLarge">총 120개의 사업 아이템</Text>
            <a href="/write" style={{ height: '100%' }}>
              <Button style={{ height: '100%' }}>사업 아이템 작성하기</Button>
            </a>
          </AllInfo>
          <PostList>
            {itemData?.length ? (
              itemData.map((item, index) => (
                <ItemBox
                  key={item.business_id}
                  href={`/post/${item.business_id}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ItemContent>
                    <Text font="LabelLarge" color="Blue500">
                      {item.business_name}
                    </Text>
                    <Text font="BodyLarge">{item.one_liner}</Text>
                    <TagList>
                      {item.tags.map((tag) => (
                        <Tag key={tag.id}>
                          <Text font="LabelSmall" color="Gray700">
                            #{tag.tagName}
                          </Text>
                        </Tag>
                      ))}
                    </TagList>
                  </ItemContent>
                  <PriceBox>
                    <Text font="LabelMedium" color="Gray600">
                      총 투자금
                    </Text>
                    <PriceFrame>
                      <Text font="TitleSmall" color="Blue500">
                        {item.total_investment.toLocaleString('en')}
                      </Text>
                      <Text font="LabelLarge" color="Blue500">
                        원
                      </Text>
                    </PriceFrame>
                  </PriceBox>
                </ItemBox>
              ))
            ) : (
              <>사업 아이템 없음</>
            )}
          </PostList>
        </PostSection>
      </Main>
    </>
  );
}

const PriceFrame = styled.div`
  display: flex;
  gap: 2px;
  align-items: flex-end;
`;
const PriceBox = styled.div`
  display: flex;
  padding: 12px 0;
  width: 240px;
  gap: 4px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;
const Tag = styled.div`
  padding: 4px 12px;
  border-radius: 16px;
  background-color: ${Colors.Gray50};
  border: 1px solid ${Colors.Gray100};
`;
const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 12px;
  margin-top: 8px;
`;
const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;
const ItemBox = styled.a`
  display: flex;
  gap: 16px;
  padding: 24px 0;
  border-top: 1px solid ${Colors.Gray100};
  opacity: 0;
  animation: up 0.4s forwards;
`;
const PostList = styled.section`
  display: flex;
  flex-direction: column;
`;
const AllInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
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
const BannerFrame = styled.div`
  display: flex;
  height: 256px;
  width: 100%;
  padding-top: 72px;
  justify-content: center;
  background-color: ${Colors.Blue50};
  overflow: hidden;
`;
const PostSection = styled.section`
  display: flex;
  gap: 24px;
  flex-direction: column;
  padding: 64px 40px 120px;
  max-width: 1280px;
  width: 100%;
`;
const Main = styled.main`
  display: flex;
  justify-content: center;
  min-height: calc(100dvh - 328px);
`;
