import { useEffect, useState } from 'react';
import { getAllBusiness } from '../../apis/business';
import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Text } from '../../components/designSystem/Text';
import { Button } from '../../components/designSystem/Button';

interface BusinessItem {
  business_id: string;
  business_name: string;
  one_line_introduction: string;
  tags: { tag_id: string; tag_name: string }[];
  number_of_data: number;
}

const PostPage = () => {
  const [itemData, setItemData] = useState<BusinessItem[]>([]);

  const fetchData = async () => {
    try {
      const data = await getAllBusiness();
      setItemData(data);
    } catch (error) {
      console.error('사업 아이템 목록을 불러오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            <Text font="LabelLarge">총 {itemData.length}개의 사업 아이템</Text>
            <div>
              <a href="/write" style={{ height: '100%' }}>
                <Button style={{ height: '100%' }}>사업 아이템 작성하기</Button>
              </a>
            </div>
          </AllInfo>
          <PostList>
            {itemData.length ? (
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
                    <Text font="BodyLarge">{item.one_line_introduction}</Text>
                    <TagList>
                      {item.tags.map((tag) => (
                        <Tag key={tag.tag_id}>
                          <Text font="LabelSmall" color="Gray700">
                            #{tag.tag_name}
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
                        {item.number_of_data ? item.number_of_data.toLocaleString('en') : '0'}
                      </Text>
                      <Text font="LabelLarge" color="Blue500">
                        원
                      </Text>
                    </PriceFrame>
                  </PriceBox>
                </ItemBox>
              ))
            ) : (
              <Text font="BodyLarge" color="Gray600">
                사업 아이템 없음
              </Text>
            )}
          </PostList>
        </PostSection>
      </Main>
    </>
  );
};

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

export default PostPage;
