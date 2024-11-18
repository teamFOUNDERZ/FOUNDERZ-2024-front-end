import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Text } from "../components/designSystem/Text";
import { Button } from "../components/designSystem/Button";


const CompleteModal = () => {
   const Navigate = useNavigate();

   const navigate = () => {
      Navigate('/post/2')
   }
   return (
      <Overlay>
         <ModalContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <Text font='TitleMedium'>자금 투자 계약서 보내기를 <Text font='TitleMedium' color="Blue500">완료하였습니다!</Text></Text>
            <Text font='BodyLarge' color="Gray600">마이페이지에서 계약서의 수정이 가능하지만 체결 된 이후로는 수정이 불가합니다.</Text>
            </div>
            <Button size="large" full onClick={navigate}>확인</Button>
         </ModalContent>
      </Overlay >
   );
};

export default CompleteModal;


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
   box-sizing: border-box;
   display: flex;
   flex-direction: column;
   gap: 32px;
  background-color: white;
  padding: 40px;
  border-radius: 32px;
  max-width: 480px;
  width: 100%;
  animation: up 0.4s forwards;
 
`;
