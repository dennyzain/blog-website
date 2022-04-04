import React, { ReactElement } from 'react';
import { User } from '../../interfaces/PostSection';
import Footer from '../organisms/Footer';
import Navbar from '../organisms/Navbar';

interface LayoutProps{
    children:ReactElement;
    user:User;
    status:'post'|'project'|'certificate'|'about'
}

export default function Layout(props:LayoutProps) {
  const { children, user, status } = props;

  return (
    <div className="md:mx-36 lg:mx-60 xl:mx-96 2xl:mx-auto 2xl:w-2/4  ">
      <Navbar user={user} status={status} />
      {children}
      <Footer />
    </div>
  );
}
