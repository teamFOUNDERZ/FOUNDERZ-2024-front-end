import { useEffect, useState } from 'react';
import { getCookie } from '../../utils/cookies';
import HeaderNotLogin from './common/headerNotLogin';  // 로그인 안된 상태의 헤더
import HeaderLogined from './common/headerLogined';    // 로그인 된 상태의 헤더

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 쿠키에서 accessToken을 확인하여 로그인 상태를 설정
    const accessToken = getCookie('authToken');
    setIsLoggedIn(!!accessToken);  // accessToken이 있으면 로그인 상태로 설정
  }, []);

  return (
    <>
      {isLoggedIn ? <HeaderLogined /> : <HeaderNotLogin />}
    </>
  );
};
