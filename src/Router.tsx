import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/designSystem/Footer';
import { Header } from './components/designSystem/Header';
import Writepost from './components/organism/Writepost';
import DetailPost from './page/detailPost/Page';
import LogInPage from './page/logIn/page';
import MainPage from './page/main/page';
import PostPage from './page/post/page';
import Signup from './page/signup';
import Infomation from './page/signup/infomation';
import Interest from './page/signup/interest';
import SignupType from './page/signup/signUpType';
import Alarm from './page/Alarm/Page';
import My from './page/My/Page';

import InvestCheck from "./components/organism/InvestCheck";
import InvestWrite from "./components/organism/InvestWrite";
import './styles/globals.css';
import Zustand from './page/zustand';
import PaymentPage from './page/PaymentPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/post/2" element={<DetailPost/>} />
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/infomation" element={<Infomation />} />
        <Route path="/signupType" element={<SignupType />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/alarm" element={<Alarm />} />
        <Route path="/my" element={<My />} />
        <Route path="/write" element={<Writepost />} />
        <Route path="/investWrite" element={<InvestWrite />} />
        <Route path="/z" element={<Zustand />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
