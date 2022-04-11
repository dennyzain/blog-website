import { ReactNode } from 'react';
import { User } from '../../interfaces/PostSection';
import Footer from '../organisms/Footer';
import Navbar from '../organisms/Navbar';

interface LayoutProps{
    children:ReactNode;
    user:User
    active:'post'|'project'|'certificate'|'about'
}

export default function Layout({ children, user, active }:LayoutProps) {
  return (
    <div className="md:mx-36 lg:mx-60 xl:mx-96 2xl:mx-auto 2xl:w-2/4 min-h-screen pb-16 relative">
      <Navbar user={user} active={active} />
      {children}
      <Footer />
    </div>
  );
}
