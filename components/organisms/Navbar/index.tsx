import { faBarsStaggered, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';
import NavbarDesktop from '../../molecules/NavbarDesktop';
import Profile from '../../molecules/Profile';

export default function Navbar() {
  const [isBarOpen, setIsBarOpen] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const cxClose = classNames({
    'self-center': true,
    hidden: isBarOpen === true,
  });
  const cxOpen = classNames({
    hidden: isBarOpen === false,
  });
  const handleBar = () => {
    setIsBarOpen(!isBarOpen);
  };
  const handleProfile = () => {
    setIsProfile(!isProfile);
  };
  return (
    <>
      <div className="flex justify-between py-3 px-6 md:hidden">
        <button type="button" className="flex" onClick={handleProfile}>
          <Image src="/01.jpg" width={30} height={30} alt="profile" className="rounded-full" />
          <p className="self-center text-xs pl-1 font-poppins">Who am i ?</p>
        </button>
        <FontAwesomeIcon icon={faBarsStaggered} className={cxClose} onClick={handleBar} />
        <div className={`${cxOpen}  z-10`}>
          <div className="flex flex-col absolute top-0 h-screen left-0 w-full text-center bg-slate-500 justify-center font-poppins p-3">
            <p className="text-4xl">Homepage</p>
            <p className="text-4xl">Contacts</p>
            <p className="text-4xl">About Us</p>
            <button type="button" className="flex justify-center" onClick={handleBar}>
              <FontAwesomeIcon icon={faX} className="self-center" />
              <p className="self-center p-2 text-xl">close</p>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block transition-all">
        <NavbarDesktop />
      </div>
      <Profile disabled={!isProfile} />
    </>
  );
}
