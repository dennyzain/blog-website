import { ReactNode } from 'react';
import Footer from '@components/organisms/Footer';
import Navbar from '@components/organisms/Navbar';
import { User } from '@/interfaces/PostSection';

interface LayoutProps{
    children:ReactNode;
    user:User
    active:'post'|'project'|'certificate'|'about'
}

export default function Layout({ children, user, active }:LayoutProps) {
  return (
    <div className="layout">
      <Navbar user={user} active={active} />
      {/* {children}
      <Footer /> */}
    </div>
  );
}
