import styled from "styled-components";
import { Text } from "../designSystem/Text";
import { Button } from "../designSystem/Button";
import { Input } from "../designSystem/Input";

// 자금 투자 계획서 확인

function InvestCheck() {

   return (
      <>
         <Main>
            <InvestCheckSection>
               <Text font="TitleLarge">자금 투자 계약서 확인</Text>
               <MyInfo>
                  <Text font="TitleSmall">개인정보 및 서명</Text>
                  <TableWrapper>
                     <Table>
                        <Tr>
                           <Th>주소</Th>
                           <Td><Input placeholder="주소를 입력해주세요.." style={{ width: '100%' }} /></Td>
                        </Tr>
                        <Tr>
                           <Th>대표자</Th>
                           <Td><Text font="BodyMedium">최승우</Text></Td>
                        </Tr>
                        <Tr>
                           <Th>연락처</Th>
                           <Td><Text font="BodyMedium">010-1234-5678</Text></Td>
                        </Tr>
                        <Tr>
                           <Th>도장･사인</Th>
                           <FileTd>
                              {/* 업로드 완료하면 업로드 완료로 띄우기 */}
                              <FileLabel>
                                 도장 또는 사인 업로드
                                 <FileInput type="file" accept="image/*" />
                              </FileLabel>
                              투명 배경 .png형식에 가로 세로 2:1 비율로 업로드 해주세요.
                           </FileTd>
                        </Tr>
                     </Table>
                  </TableWrapper>
                  <ButtonWrapper>
                     <Button kind="gray" size="large" full>자금 투자 계획서 확인하기</Button>
                     <Button size="large" full>계약 체결하기</Button>
                  </ButtonWrapper>
               </MyInfo>
            </InvestCheckSection>
         </Main >
      </>
   )
}

export default InvestCheck;

const InvestCheckSection = styled.section`
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
`;

const ButtonWrapper = styled.div`
   display: flex;
   gap: 12px;
`

const FileLabel = styled.label`
   color: black;
   font-size: 16px;
   padding: 12px 16px;
   background-color: #EEEEEE;
   border-radius: 12px;
`

const FileInput = styled.input`
   display: none;
`

const Th = styled.th`
   width: 80px;
   height: 84px;
   display: flex;
   align-items: center;
   font-size: 16px;
   font-weight: 500;
   text-align: left;
   padding: 0 24px;
   white-space: nowrap;
`

const FileTd = styled.td`
   width: 100%;
   display: flex;
   align-items: center;
   padding: 12px 24px;
   color: #666666;
   gap: 24px;
`

const Td = styled.td`
   width: 100%;
   display: flex;
   align-items: center;
   padding: 12px 24px;
`

const Tr = styled.tr`
   width: 100%;
   display: flex;
   border-bottom: 1px solid #EEEEEE;
`

const TableWrapper = styled.div`
   background-color: white;
   border-radius: 12px;
   border: 1px solid #EEEEEE;
   overflow: hidden; /* border-radius가 적용되도록 하기 위함 */
`;

const Table = styled.table`
   width: 100%;
`;

const MyInfo = styled.div`
   display: flex;
   flex-direction: column;
   gap: 24px;
`