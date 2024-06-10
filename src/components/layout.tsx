import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Navigation } from './Nav';
import { SidebarLeft, SidebarRight } from './Sidebar';

const Layout = () => {
  return (
    <div id="layout">
      <Header />
      <Navigation />
      <SidebarLeft show={false}/>
      <main className="main">
        <Outlet />
      </main>
      <SidebarRight show={false}/>
      <Footer />
    </div>
  );
};

export default Layout;
