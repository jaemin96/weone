import { ReactElement, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components';
import { useSelector } from 'react-redux';
import { RootState } from './redux/modules/index';
import { SignInPage, SignUpPage, FindUser, MainPage } from './pages';

const ErrorPage = lazy(() => import('./pages/error-page'));

const Router = (): ReactElement => {
  const isLoggedIn = useSelector((state: RootState) => state.sign.user);
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        {/* 로그인 상태에 따른 리다이렉트 설정 */}

        {/* Layout 없는 페이지's */}
        <Route path="/sign-in" element={<SignInPage />}/>
        <Route path="/sign-up" element={<SignUpPage />}/>
        <Route path="/find-user" element={<FindUser />}/>

        {/* Layout 지정된 페이지's */}
        <Route element={<Layout />}>
          <Route path="/" element={isLoggedIn ? <MainPage /> : <Navigate to="/sign-in" />}/>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
