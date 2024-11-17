import React from "react";
import styled from "styled-components";
import { Text } from "../designSystem/Text";
import { Colors } from "../../styles/colors";
import { Logo } from '../../assets';

interface ModalProps {
   close: () => void;
}

const Modal: React.FC<ModalProps> = ({ close }) => {
   React.useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {
         document.body.style.overflow = 'auto';
      };
   }, []);

   return (
      <Overlay>
         <ModalContent>
            <div style={{ color: Colors.Blue500 }}>
               <Logo />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
               <Text font="TitleLarge" >자금 투자 계약서 작성</Text>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
               <Text font="BodyLarge" color="Gray700">자금지원자 땡땡떙님(이하 “A”라 한다)과 “토스” 자금유치자 뭐뭐뭐님(이하 “B”라 한다)은 상호간에 자금 투자 지원과 관련한 계약을 다음과 같이 체결한다.</Text>

               <Contents>
                  <Text font="TitleSmall">제 1조 [목적]</Text>
                  <Text font="BodyLarge" color="Gray800" style={{ paddingLeft: '32px' }}>본 계약은 "B"의 사업활동에 대한 지원목적으로서 "A"가 자금을 투자하고 이에 대하여 자금회수와 관련된 내용을 규율함을 목적으로 한다.</Text>
               </Contents>
               <Contents>
                  <Text font="TitleSmall">제 2조 [투자금]</Text>
                  <Text font="BodyLarge" color="Gray800" style={{ paddingLeft: '32px' }}>본 계약상 "A"가 "B"에게 투자하는 금액은 일금 일십만원정 (₩100,000)으로 한다.</Text>
               </Contents>
               <Contents>
                  <Text font="TitleSmall">제 3조 [계약기간]</Text>
                  <Text font="BodyLarge" color="Gray800" style={{ paddingLeft: '32px' }}>"B"는 계약 체결일 부터 계약기간 2024.7.31 내에 투자금 원금을 “A”에게 모두 상환해야한다.</Text>
               </Contents>
               <Contents>
                  <Text font="TitleSmall">제 4조 [상황 방법]</Text>
                  <Text font="BodyLarge" color="Gray800" style={{ paddingLeft: '32px' }}>
                     1. 제2조의 투자금 원금은 다음 각 호의 방법으로 "A"의 계좌에 현금입금 상환한다.
                     <TableWrapper>
                        <Table>
                           <Thead>
                              <Th>상환</Th>
                              <Th>금액 및 날짜</Th>
                           </Thead>
                           <Tr>
                              <NumTh>1차 상환</NumTh>
                              <Td>일금 오만원정 (₩50,000), 2024년 7월 31일</Td>
                           </Tr>
                           <Tr>
                              <NumTh>2차 상환</NumTh>
                              <Td>일금 오만원정 (₩50,000), 2024년 8월 31일</Td>
                           </Tr>
                        </Table>
                     </TableWrapper>
                  </Text>

                  <Text font="BodyLarge" color="Gray800" style={{ paddingLeft: '32px' }}>2. 제1항의 투자원금과 별도로 매 분기(0분기 기준) 매출액의 0.5%를 익월 20일에 투자수수료로서 "A"의 계좌에 현금입금 한다.</Text>
                  <Text font="BodyLarge" color="Gray800" style={{ paddingLeft: '32px' }}>3. 투자금과 관련된 이자는 따로 발생하지 않으며 제2항의 투자수수료로 이에 갈음한다.</Text>
               </Contents>
               <Contents>
                  <Text font="TitleSmall">제 5조 [전용금지]</Text>
                  <Text font="BodyLarge" color="Gray800" style={{ paddingLeft: '32px' }}>"B"는 투자금에 대하여 경영상의 목적으로만 사용이 가능하며 기타의 부동산 구입이나 그밖에 개인적 용도 등의 경영 이외의 목적으로 사용할 수 없다.</Text>
               </Contents>
               <Contents>
                  <Text font="TitleSmall">제 6조 [보고사항]</Text>
                  <Text font="BodyLarge" color="Gray800" style={{ paddingLeft: '32px' }}>1. "B"는 매분기 매출액의 관련 자료를 "A"에게 서면 보고하여야 하며, 허위보고, 누락, 과대(과소)보고 등의 신의칙에 반하는 행위를 하여서는 아니된다.</Text>
                  <Text font="BodyLarge" color="Gray800" style={{ paddingLeft: '32px' }}>2. "A"는 필요한 경우 "B"의 영업소에서 조사 및 자료제출을 할 수 있으며, 이러한 경우 가능한 한 "B"의 영업에 지장을 주지 아니하도록 배려하여야 한다.</Text>
               </Contents>
               <Contents>
                  <Text font="TitleSmall">제 7조 [기한이익 상실]</Text>
                  <Text font="BodyLarge" color="Gray800" style={{ paddingLeft: '32px' }}>1. "B"가 제3조의 투자원금 상환일을 3일 이상 지체한 경우 즉시 기한이익을 상실하여 잔여 투자금액 전부의 상환을 "A"는 청구할 수 있다.</Text>
                  <Text font="BodyLarge" color="Gray800" style={{ paddingLeft: '32px' }}>2. "B"가 제3조의 투자수수료를 연속하여 1분기를 연체한 경우 또는 제4조에 위반한 경우에도 제1항과 같다.</Text>
                  <Text font="BodyLarge" color="Gray800" style={{ paddingLeft: '32px' }}>3. 기한의 이익 상실일부터 매 1일당 상환할 금액에 대하여 20%에 해당하는 금액의 연체손해금이 변제 시까지 발생한다.</Text>
               </Contents>
               <Contents>
                  <Text font="TitleSmall">제 8조 [분쟁해결]</Text>
                  <Text font="BodyLarge" color="Gray800" style={{ paddingLeft: '32px' }}>1. 본 계약과 관련하여 양 당사자 간의 분쟁이 발생한 경우, 원칙적으로 "B"와 "A" 상호간의 합의에 의해 해결한다.</Text>
                  <Text font="BodyLarge" color="Gray800" style={{ paddingLeft: '32px' }}>2. 제1항에도 불구하고 분쟁이 해결되지 않을 경우 "B"의 주소지 관할 지방법원을 그 관할로 하여 재판함으로써 해결한다.</Text>
               </Contents>
               <Contents>
                  <Text font="TitleSmall">제 9조 [특약사항]</Text>
                  <Text font="BodyLarge" color="Gray800" style={{ paddingLeft: '32px' }}>상기 계약 일반사항 이외에 아래 내용을 특약사항으로 정하며, 일반사항과 특약사항이 상충되는 경우에는 특약사항을 우선하여 적용하도록 한다.</Text>
               </Contents>
               <Contents>
                  <Text font="TitleSmall">제 10조 [기타사항]</Text>
                  <Text font="BodyLarge" color="Gray800" style={{ paddingLeft: '32px' }}>1. 계약의 당사자는 본 계약의 내용을 신의성실에 의거하여 준수하여야 한다.</Text>
                  <Text font="BodyLarge" color="Gray800" style={{ paddingLeft: '32px' }}>2. 계약 기간 중 계약의 변경은 당사자의 서면 합의에 의해서만 변경될 수 있으며 서면날인 된 문서를 본 계약서의 말미에 첨부한다.</Text>
                  <Text font="BodyLarge" color="Gray800" style={{ paddingLeft: '32px' }}>3. 본 계약서에서 명시되지 않은 부분에 대하여는 관련 법규 및 상관습에 따르기로 한다.</Text>
               </Contents>

               <Text font="BodyLarge" color="Gray800" style={{ paddingLeft: '32px' }}>본 계약의 성립을 증명하기 위하여 계약서 2부를 작성하여 "A"와 "B"가 기명날인 후 각 1부씩 보관한다.</Text>

               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', margin: '24px 0' }}>
                  <Text font="TitleSmall" color="Blue500" >체결 일자</Text>
                  <Text font="TitleMedium">0000년 00월 00일</Text>
               </div>

               <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <PeopleInfo>
                     <Text font="TitleSmall" color="Blue500">자금지원자 A</Text>
                     <div style={{ display: 'flex' }}>
                        <Text font="LabelMedium" style={{ width: '84px' }}>주소</Text>
                        <Text font="BodySmall">없음</Text>
                     </div>
                     <div style={{ display: 'flex' }}>
                        <Text font="LabelMedium" style={{ width: '84px' }}>대표자</Text>
                        <Text font="BodySmall">이태윤</Text>
                     </div>
                     <div style={{ display: 'flex' }}>
                        <Text font="LabelMedium" style={{ width: '84px' }}>연락처</Text>
                        <Text font="BodySmall">01012345678</Text>
                     </div>
                  </PeopleInfo>
                  <PeopleInfo>
                     <Text font="TitleSmall" color="Blue500">자금지원자 B</Text>
                     <div style={{ display: 'flex' }}>
                        <Text font="LabelMedium" style={{ width: '84px' }}>주소</Text>
                        <Text font="BodySmall">서울특별시 강남구 테헤란로 142, 12층(역삼동, 아크플레이스)</Text>
                     </div>
                     <div style={{ display: 'flex', position: 'relative' }}>
                        <Text font="LabelMedium" style={{ width: '84px' }}>대표자</Text>
                        <Text font="BodySmall">이승건</Text>
                        <DojoImage src="/images/dojo_test.png" />
                     </div>
                     <div style={{ display: 'flex' }}>
                        <Text font="LabelMedium" style={{ width: '84px' }}>연락처</Text>
                        <Text font="BodySmall">01012345678</Text>
                     </div>

                  </PeopleInfo>
               </div>
            </div>

         </ModalContent>

      </Overlay >
   );
};

export default Modal;

const DojoImage = styled.img`
   position: absolute;
   top: -20px;
   left: 8%;
   height: 60px;
`

const PeopleInfo = styled.div`
   display: flex;
   flex-direction: column;
   background-color: ${Colors.Gray50};
   padding: 24px;
   gap: 12px;
   border: 1px solid ${Colors.Gray100};
   border-radius: 16px;
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; 
`;

const ModalContent = styled.div`
   display: flex;
   flex-direction: column;
   gap: 32px;
  background-color: white;
  padding: 64px 80px;
  border-radius: 8px;
  max-width: 1040px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto; // 콘텐츠 넘치면 스크롤
`;

const Contents = styled.div`
   display: flex;
   flex-direction: column;
   gap: 16px;
`

const TableWrapper = styled.div`
   margin: 16px 0 0 32px;
   border: 1px solid ${Colors.Gray100};
   overflow: hidden;
   border-radius: 8px;
`;


const Table = styled.table`
   width: 100%;
`

const Tr = styled.tr`
   width: 100%;
   display: flex;
`

const Thead = styled.tr`
   background-color: ${Colors.Blue50};
   width: 100%;
   display: flex;
`

const Th = styled.th`
   min-width: 80px;
   align-items: center;
   font-size: 18px;
   font-weight: 500;
   text-align: left;
   padding: 12px 24px;
   white-space: nowrap;
`

const NumTh = styled.th`
   min-width: 80px;
   display: flex;
   align-items: center;
   font-size: 16px;
   font-weight: 500;
   text-align: left;
   padding: 12px 24px;
   white-space: nowrap;
   border-top: 1px solid ${Colors.Gray100};
`

const Td = styled.td`
   width: 100%;
   display: flex;
   align-items: center;
   padding: 12px 24px;
   font-size: 16px;
   border-top: 1px solid ${Colors.Gray100};
`