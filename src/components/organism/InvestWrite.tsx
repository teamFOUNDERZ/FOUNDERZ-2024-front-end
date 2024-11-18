import { useState } from "react";
import styled from "styled-components";
import { Text } from "../designSystem/Text";
import { Colors } from "../../styles/colors";
import { Input } from "../designSystem/Input";
import { Button } from "../designSystem/Button";
import { Remove as RemoveIcon } from "../../assets";
import { Add_Row } from "../../assets";
// import MyInfo from "./MyInfo";
// import Modal from "./PreviewInvest";
import PreviewModal from "../../modals/PreviewModal";
import ConfirmSendModal from "../../modals/ConfirmSendModal";

// import PreviewInvest from "./PreviewInvest";



// 자금 투자 계획서 작성

function InvestWrite() {

   const [rows, setRows] = useState([{ id: 1, value: '' }]);
   const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false); // 모달 상태 관리
   const [isConfirmSendModalOpen, setIsConfirmSendModalOpen] = useState(false);
   const [isUploaded, setIsUploaded] = useState(false);

   const handleFileUpload = (event:any) => {
      const file = event.target.files[0];
      if (file) {
         // 업로드 로직 처리 (필요 시 추가)
         setIsUploaded(true); // 업로드 완료 상태로 설정
      }
   };

   const handleAddRow = () => {
      setRows((prevRows) => [
         ...prevRows,
         { id: prevRows.length + 1, value: '' },
      ]);
   };

   const handleRemoveRow = (id: number) => {
      if (rows.length === 1) return;
      const filteredRows = rows.filter((row) => row.id !== id);
      const updatedRows = filteredRows.map((row, index) => ({
         ...row,
         id: index + 1,
      }));
      setRows(updatedRows);
   };

   const investInfoHeaders = [
      "자금지원자",
      "선호 계약기간",
      "지원 자금",
      "자금 유치자",
      "사업 아이템"
   ];

   const fundProvider = "이태윤"
   const preferredContractPeriod = "2024.10.31"
   const fundAmount = "100,000,000,000"
   const fundraiser = "이승건"
   const businessItem = "토스"

   const getCurrentDate = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      return `${year}년 ${month}월 ${day}일`;
   };

   const openPreviewModal = () => {
      setIsPreviewModalOpen(true);
   };

   const openConfirmSendModal = () => {
      setIsConfirmSendModalOpen(true);
   };

   const closeModal = () => {
      setIsPreviewModalOpen(false);
      setIsConfirmSendModalOpen(false);
   };

   return (
      <>
         <Main>
            <InvestWriteSection>
               <Title>
                  <Text font="TitleLarge">자금 투자 계약서 작성</Text>
                  <Text font="BodyMedium" color="Gray700">자금지원자 {fundProvider}님(이하 “A”라 한다)과 “토스” 자금유치자 {fundraiser}님(이하 “B”라 한다)은 상호간에 자금 투자 지원과 관련한 계약을 다음과 같이 체결한다.</Text>
               </Title>
               <InvestInfoTable>
                  <thead >
                     <tr>
                        {investInfoHeaders.map((header, index) => (
                           <InvestInfoTh key={index}>{header}</InvestInfoTh>
                        ))}
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <InvestInfoTd>{fundProvider}</InvestInfoTd>
                        <InvestInfoTd>{preferredContractPeriod} 까지</InvestInfoTd>
                        <InvestInfoTd>{fundAmount}원</InvestInfoTd>
                        <InvestInfoTd>{fundraiser}</InvestInfoTd>
                        <InvestInfoTd>{businessItem}</InvestInfoTd>
                     </tr>
                  </tbody>
               </InvestInfoTable>
               <ContentsWrapper>
                  <Contents>
                     <Text font="TitleSmall">제 1조 [목적]</Text>
                     <Text font="BodyLarge" color="Gray800">본 계약은 "B"의 사업활동에 대한 지원목적으로서 "A"가 자금을 투자하고 이에 대하여 자금회수와 관련된 내용을 규율함을 목적으로 한다.</Text>
                  </Contents>
                  <Contents>
                     <Text font="TitleSmall">제 2조 [투자금]</Text>
                     <Text font="BodyLarge" color="Gray800">본 계약상 "A"가 "B"에게 투자하는 금액은 일금 일십만원정 (₩100,000)으로 한다.</Text>
                  </Contents>
                  <Contents>
                     <Text font="TitleSmall">제 3조 [계약기간]</Text>
                     <Text font="BodyLarge" color="Gray800">"B"는 계약 체결일 부터 계약기간 2024.7.31 내에 투자금 원금을 “A”에게 모두 상환해야한다.</Text>
                     <TableWrapper>
                        <Table>
                           <Tr>
                              <Th>자원 지원자 선호 계약 기간</Th>
                              <Td>계약 체결일 부터 2024.10.31 까지</Td>
                           </Tr>
                           <Tr>
                              <Th>최종계약기간<Div /></Th>
                              <Td>
                                 <Input style={{ width: '80px' }} /> 년
                                 <Input style={{ width: '80px' }} /> 월
                                 <Input style={{ width: '80px' }} /> 일 까지
                              </Td>
                           </Tr>
                        </Table>
                     </TableWrapper>
                  </Contents>
                  <Contents>
                     <Text font="TitleSmall">제 4조 [상환 방법]</Text>
                     <Text font="BodyLarge" color="Gray800">1. 제2조의 투자금 원금은 다음 각 호의 방법으로 "A"의 계좌에 현금입금 상환한다.</Text>
                     <CreateTableFrame>
                        {rows.map((row, index) => (
                           <CreTr key={row.id}>
                              <CreTh>{row.id}차 상환</CreTh>
                              <CreTd>
                                 <Test>
                                    일금 오만원정 (₩ <Input style={{ width: '170px' }} /> ),
                                    <Input style={{ width: '80px' }} /> 년
                                    <Input style={{ width: '60px' }} /> 월
                                    <Input style={{ width: '60px' }} /> 일
                                    <p>/</p>
                                    <p>시간</p>
                                    <Input style={{ width: '60px' }} /> 시
                                    <Input style={{ width: '60px' }} /> 분
                                 </Test>
                                 <Test>
                                    <CreRemove onClick={() => handleRemoveRow(row.id)}>
                                       <RemoveIcon />
                                    </CreRemove>

                                 </Test>
                              </CreTd>
                           </CreTr>
                        ))}
                        <CreButton onClick={handleAddRow}>
                           <Add_Row />특이사항 추가하기
                        </CreButton>
                     </CreateTableFrame>

                     <Text font="BodyLarge" color="Gray800">2. 제1항의 투자원금과 별도로 매 분기(0분기 기준) 매출액의 0.5%를 익월 20일에 투자수수료로서 "A"의 계좌에 현금입금 한다.</Text>
                     <TableWrapper>
                        <Table>
                           <Tr>
                              <Th>매출액</Th>
                              <Td><Input style={{ width: '120px' }} /> %</Td>
                           </Tr>
                           <Tr>
                              <Th>익월</Th>
                              <Td><Input style={{ width: '120px' }} /> %</Td>
                           </Tr>
                        </Table>
                     </TableWrapper>
                     <Text font="BodyLarge" color="Gray800">3. 투자금과 관련된 이자는 따로 발생하지 않으며 제2항의 투자수수료로 이에 갈음한다.</Text>
                  </Contents>
                  <Contents>
                     <Text font="TitleSmall">제 5조 [전용금지]</Text>
                     <Text font="BodyLarge" color="Gray800">"B"는 투자금에 대하여 경영상의 목적으로만 사용이 가능하며 기타의 부동산 구입이나 그밖에 개인적 용도 등의 경영 이외의 목적으로 사용할 수 없다.</Text>
                  </Contents>
                  <Contents>
                     <Text font="TitleSmall">제 6조 [보고사항]</Text>
                     <TextWrapper>
                        <Text font="BodyLarge" color="Gray800">1. "B"는 매분기 매출액의 관련 자료를 "A"에게 서면 보고하여야 하며, 허위보고, 누락, 과대(과소)보고 등의 신의칙에 반하는 행위를 하여서는 아니된다.</Text>
                        <Text font="BodyLarge" color="Gray800">2. "A"는 필요한 경우 "B"의 영업소에서 조사 및 자료제출을 할 수 있으며, 이러한 경우 가능한 한 "B"의 영업에 지장을 주지 아니하도록 배려하여야 한다.</Text>
                     </TextWrapper>
                  </Contents>
                  <Contents>
                     <Text font="TitleSmall">제 7조 [기한이익 상실]</Text>
                     <TextWrapper>
                        <Text font="BodyLarge" color="Gray800">1. "B"가 제3조의 투자원금 상환일을 3일 이상 지체한 경우 즉시 기한이익을 상실하여 잔여 투자금액 전부의 상환을 "A"는 청구할 수 있다.</Text>
                        <Text font="BodyLarge" color="Gray800">2. "B"가 제3조의 투자수수료를 연속하여 1분기를 연체한 경우 또는 제4조에 위반한 경우에도 제1항과 같다.</Text>
                        <Text font="BodyLarge" color="Gray800">3. 기한의 이익 상실일부터 매 1일당 상환할 금액에 대하여 20%에 해당하는 금액의 연체손해금이 변제 시까지 발생한다.</Text>
                     </TextWrapper>
                     <TableWrapper>
                        <Table>
                           <Tr>
                              <Th>상환 지체일</Th>
                              <Td><Input style={{ width: '120px' }} /> 일</Td>
                           </Tr>
                           <Tr>
                              <Th>연체 분기</Th>
                              <Td><Input style={{ width: '120px' }} /> 분기</Td>
                           </Tr>
                           <Tr>
                              <Th>연체 손해금</Th>
                              <Td><Input style={{ width: '120px' }} /> %</Td>
                           </Tr>
                        </Table>
                     </TableWrapper>
                  </Contents>
                  <Contents>
                     <Text font="TitleSmall">제 8조 [분쟁해결]</Text>
                     <TextWrapper>
                        <Text font="BodyLarge" color="Gray800">1. 본 계약과 관련하여 양 당사자 간의 분쟁이 발생한 경우, 원칙적으로 "B"와 "A" 상호간의 합의에 의해 해결한다.</Text>
                        <Text font="BodyLarge" color="Gray800">2. 제1항에도 불구하고 분쟁이 해결되지 않을 경우 "B"의 주소지 관할 지방법원을 그 관할로 하여 재판함으로써 해결한다.</Text>
                     </TextWrapper>
                  </Contents>
                  <Contents>
                     <Text font="TitleSmall">제 9조 [특약사항]</Text>
                     <Text font="BodyLarge" color="Gray800">상기 계약 일반사항 이외에 아래 내용을 특약사항으로 정하며, 일반사항과 특약사항이 상충되는 경우에는 특약사항을 우선하여 적용하도록 한다.</Text>
                     <CreateTableFrame>
                        {rows.map((row, index) => (
                           <CreTr key={row.id}>
                              <CreTh>{row.id}.</CreTh>
                              <CreTd>
                                 <Input
                                    placeholder="특이사항을 입력해주세요.."
                                    style={{ width: '100%' }}
                                 />
                                 <CreRemove onClick={() => handleRemoveRow(row.id)}>
                                    <RemoveIcon />
                                 </CreRemove>
                              </CreTd>
                           </CreTr>
                        ))}
                        <CreButton onClick={handleAddRow}>
                           <Add_Row />특이사항 추가하기
                        </CreButton>
                     </CreateTableFrame>
                  </Contents>
                  <Contents>
                     <Text font="TitleSmall">제 10조 [기타사항]</Text>
                     <TextWrapper>
                        <Text font="BodyLarge" color="Gray800">1. 계약의 당사자는 본 계약의 내용을 신의성실에 의거하여 준수하여야 한다.</Text>
                        <Text font="BodyLarge" color="Gray800">2. 계약 기간 중 계약의 변경은 당사자의 서면 합의에 의해서만 변경될 수 있으며 서면날인 된 문서를 본 계약서의 말미에 첨부한다.</Text>
                        <Text font="BodyLarge" color="Gray800">3. 본 계약서에서 명시되지 않은 부분에 대하여는 관련 법규 및 상관습에 따르기로 한다.</Text>
                     </TextWrapper>
                  </Contents>
                  <Text font="BodyLarge" color="Gray800">본 계약의 성립을 증명하기 위하여 계약서 2부를 작성하여 "A"와 "B"가 기명날인 후 각 1부씩 보관한다.</Text>
                  <DateContents>
                     <Text font="TitleSmall">{getCurrentDate()}</Text>
                     <Text font="BodySmall" color="Gray600">계약 날짜는 계약서를 보낸 후, 자금지원자님이 서명한 날짜로 설정됩니다.</Text>
                  </DateContents>






                  <MyInfo>
                     <Text font="TitleSmall">개인정보 및 서명</Text>
                     <TableWrapper>
                        <Table>
                           <Tr>
                              <Th>주소</Th>
                              <InfoTd><Input placeholder="주소를 입력해주세요.." style={{ width: '100%' }} /></InfoTd>
                           </Tr>
                           <Tr>
                              <Th>대표자</Th>
                              <InfoTd><Text font="BodyMedium">최승우</Text></InfoTd>
                           </Tr>
                           <Tr>
                              <Th>연락처</Th>
                              <InfoTd><Text font="BodyMedium">010-1234-5678</Text></InfoTd>
                           </Tr>
                           <Tr>
                              <Th>도장･사인</Th>
                              <FileTd>
                                 {/* 업로드 완료하면 업로드 완료로 띄우기 */}
                                 <FileLabel
                                    style={{
                                       backgroundColor: isUploaded ? "#1860F0" : "#EEEEEE",
                                       color: isUploaded ? 'white' : 'black'
                                    }}
                                 >
                                    {isUploaded ? "업로드 완료" : "도장 또는 사인 업로드"}
                                    <FileInput
                                       type="file"
                                       accept="image/*"
                                       onChange={handleFileUpload}
                                    />
                                 </FileLabel>
                                 투명 배경 .png형식에 가로 세로 2:1 비율로 업로드 해주세요.
                              </FileTd>
                           </Tr>
                        </Table>
                     </TableWrapper>
                     <ButtonWrapper>
                        <Button kind="gray" size="large" style={{ border: 'none' }} full onClick={openPreviewModal}>자금 투자 계획서 미리보기</Button>
                        <Button size="large" full onClick={openConfirmSendModal}>계약 체결하기</Button>
                     </ButtonWrapper>
                  </MyInfo>



               </ContentsWrapper>
            </InvestWriteSection>
         </Main>
         {isPreviewModalOpen && <PreviewModal close={closeModal} />}
         {isConfirmSendModalOpen && <ConfirmSendModal close={closeModal} />}
      </>
   )
};

export default InvestWrite;



const MyInfo = styled.div`
   display: flex;
   flex-direction: column;
   gap: 24px;
`

const ButtonWrapper = styled.div`
   display: flex;
   gap: 12px;
`

const FileLabel = styled.label`
   color: black;
   font-size: 16px;
   padding: 12px 16px;
   border-radius: 12px;

`

const FileInput = styled.input`
   display: none;
`


const FileTd = styled.td`
   width: 100%;
   display: flex;
   align-items: center;
   padding: 12px 24px;
   color: #666666;
   gap: 24px;
`

const InfoTd = styled.td`
   width: 100%;
   display: flex;
   align-items: center;
   padding: 12px 24px;
`











const CreateTableFrame = styled.div`
   background-color: white;
   border-radius: 12px;
   border: 1px solid #EEEEEE;
   overflow: hidden;
`

const CreTr = styled.tr`
   display: flex;
   border-bottom: 1px solid #EEEEEE;
   
`

const CreTh = styled.th`
   width: 80px;
   height: 84px;
   flex-shrink: 0;
   display: flex;
   align-items: center;
   font-size: 16px;
   font-weight: 500;
   text-align: left;
   padding: 0 24px;
   white-space: nowrap;
`

const Test = styled.td`
   display: flex;
   align-items: center;
   gap: 12px;
   font-size: 20px;
`

const CreTd = styled.td`
   display: flex;
   align-items: center;
   padding: 12px 24px;
   justify-content: space-between;
   flex-grow: 1;
   gap: 24px;
   
`

const CreButton = styled.button`
   width: 100%;
   border: none;
   display: flex;
   gap: 8px;
   justify-content: center;
   padding: 16px 0;
   font-size: 18px;
   font-weight: 500;
   background-color: ${Colors.Gray50};
`

const CreRemove = styled.button`
   font-size: 30px;
   width: 48px;
   height: 48px;
   border-radius: 12px;
   border: 1px solid ${Colors.Gray200};
   background-color: white;
`

const Div = styled.div`
   width: 85px;
`

const DateContents = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 12px;
`

const TextWrapper = styled.div`
   display: flex;
   flex-direction: column;
`


const Td = styled.td`
   /* width: 100%; */
   display: flex;
   align-items: center;
   padding: 12px 24px;
   gap: 12px;
   font-size: 20px;
  
`

const Th = styled.th`
   min-width: 80px;
   height: 84px;
   display: flex;
   align-items: center;
   font-size: 16px;
   font-weight: 500;
   text-align: left;
   padding: 0 24px;
   white-space: nowrap;
   
`

const Tr = styled.tr`
   width: 100%;
   display: flex;
   border-bottom: 1px solid #EEEEEE;
`

const Table = styled.table`
   width: 100%;
`

const TableWrapper = styled.div`
   background-color: white;
   border-radius: 12px;
   border: 1px solid #EEEEEE;
   overflow: hidden; /* border-radius가 적용되도록 하기 위함 */
`;

const Contents = styled.div`
   display: flex;
   flex-direction: column;
   gap: 16px;
`

const ContentsWrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 52px;
   animation: up 0.4s forwards;
`

const InvestInfoTd = styled.td`
   font-size: 20px;
   padding-top: 10px;
`

const InvestInfoTh = styled.th`
   min-width: 120px;
   color: ${Colors.Gray600};
   font-size: 16px;
   text-align: left;
   
`

const InvestInfoTable = styled.table`
   width: 90%;
   animation: up 0.4s forwards;
`

const Title = styled.div`
   display: flex;
   flex-direction: column;
   gap: 24px;
`


const InvestWriteSection = styled.section`
   display: flex;
   gap: 64px;
   flex-direction: column;
   padding: calc(72px + 64px) 40px 120px;
   max-width: 1280px;
   width: 100%;
`

const Main = styled.main`
   display: flex;
   justify-content: center;
   min-height: calc(100dvh - 328px);
`