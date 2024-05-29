import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = (): ReactElement => {
  return (
    <>
      <header>Weone</header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
