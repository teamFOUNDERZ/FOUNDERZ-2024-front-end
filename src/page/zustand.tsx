import styled from 'styled-components';
import { signupStore } from '../store/signupState';

export default function Zustand() {
  const {
    account_id,
    password,
    name,
    phone_number,
    type, // 변경된 `user_type`을 `type`으로 사용
    tag_ids, // `tag_name`에서 `tag_ids`로 변경
  } = signupStore();

  // 모든 상태를 콘솔에 출력하여 확인
  console.log('현재 상태:', {
    account_id,
    password,
    name,
    phone_number,
    type, // `user_type` 대신 `type` 사용
    tag_ids, // `tag_name` 대신 `tag_ids` 사용
  });

  return (
    <Container>
      <h3>현재 회원가입 정보</h3>
      <p>아이디: {account_id}</p>
      <p>비밀번호: {password}</p>
      <p>이름: {name}</p>
      <p>전화번호: {phone_number}</p>
      <p>가입 유형: {type}</p> {/* `user_type` 대신 `type` 사용 */}
      <p>선택한 태그: {tag_ids.join(', ')}</p> {/* `tag_name` 대신 `tag_ids` 사용 */}
    </Container>
  );
}

const Container = styled.div`
    width: 1000px;
    height: 1000px;
    padding: 100px;
`;
