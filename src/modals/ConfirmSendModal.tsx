import { useState } from "react";
import styled from "styled-components";
import { Text } from "../components/designSystem/Text";
import { Button } from "../components/designSystem/Button";
import CompleteModal from "./CompleteModal";

interface ModalProps {
   close: () => void;
}

const ConfirmSendModal: React.FC<ModalProps> = ({ close }) => {
   const [isCompleteModalOpen, setIsCompleteModalOpen] = useState(false);

   const openCompleteModal = () => {
      setIsCompleteModalOpen(true);
   };

   return (
      <>
         {!isCompleteModalOpen && (
            <Overlay>
               <ModalContent>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                     <Text font='TitleMedium'>정말 보내시겠습니까?</Text>
                     <Text font='BodyLarge' color="Gray600">마이페이지에서 계약서의 수정이 가능하지만 체결 된 이후로는 수정이 불가합니다.</Text>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                     <Button kind='gray' size="large" full onClick={() => close()}>취소</Button>
                     <Button size="large" full onClick={openCompleteModal}>확인</Button>
                  </div>
               </ModalContent>
            </Overlay >
         )}

         {isCompleteModalOpen && <CompleteModal />}
      </>
   );
};

export default ConfirmSendModal;


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
