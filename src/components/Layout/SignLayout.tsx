import { Outlet } from 'react-router-dom';

const SignLayout = () => {
  return (
    <div id="sign-layout">
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default SignLayout;
