import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './style.css';
import { useDispatch } from 'react-redux';
import App from '../../App';
import EmptyFC from '../../components/EmptyFC';
import HeaderMenu from '../../components/HeaderMenu';
import SplashPage from '../Splash';
import LoginPage from '../Login';
import HomePage from '../Home';
import TerminalConfiguration from '../TerminalConfig';

export interface Props {
  children?: React.ReactNode;
  [name: string]: any;
}

const IndexPage: React.FC<Props> = ({ name }: Props) => {
  const dispatch = useDispatch();

  return (
    <>
      {/* <HeaderMenu></HeaderMenu> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SplashPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/terminal-configuration' element={<TerminalConfiguration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default IndexPage;
