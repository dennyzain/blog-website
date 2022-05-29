import { faArrowLeftLong, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavbarDesktop from '@components/organisms/Navbar/NavbarDesktop';
import React from 'react';
import { NavbarProps } from '@/interfaces/PostSection';
import useDarkMode from '@/hooks/useDarkMode';
import style from '@/styles/animate.module.css';

const Navbar:React.FC<NavbarProps> = ({ user, active }) =>
// const [theme, setTheme] = useDarkMode();
// const { attributes } = user;
// const {
//   push, route,
// } = useRouter();
// const pathBlog = '/blog/[slug]';
// const pathCategory = '/blog/category/[slugCtg]';
// const activeClass = cx({
//   'border-dark-mode border-b-2 mb-2 dark:border-light-mode': true,
// });
// const handleProfile = () => push('/about');
// const handleBack = () => push('/');

  // const handleDarkMode = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));
  (
    <header>
      <nav className="flex font-inter font-bold fixed left-0 top-0 w-full p-4">
        <p>Home</p>
        <p>Blogs</p>
        <p>About</p>
      </nav>
    </header>

  // {/* <nav className="flex justify-between p-3">
  //   <h1 className={style['animate-full-color']}>DZNX</h1>
  //   <button
  //     type="button"
  //     aria-label="button-dark-mode"
  //     className="px-2 py-1 border-2 self-center border-dark-mode rounded-lg dark:border-light-mode "
  //     onClick={handleDarkMode}
  //   >
  //     <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
  //   </button>
  // </nav>
  // <div className="flex justify-between py-3 px-6 md:hidden ">
  //   {route === pathBlog || route === pathCategory ? (
  //     <button onClick={handleBack} type="button" className="font-roboto">
  //       <FontAwesomeIcon
  //         icon={faArrowLeftLong}
  //         bounce
  //         className="self-center text-xs pr-1 font-poppins"
  //       />
  //       back
  //     </button>
  //   ) : (
  //     <button type="button" className="flex" onClick={handleProfile}>
  //       <Image
  //         src={attributes.profile.data.attributes.url}
  //         blurDataURL={attributes.profile.data.attributes.url}
  //         placeholder="blur"
  //         width={40}
  //         height={40}
  //         alt="profile"
  //         className="rounded-full"
  //       />
  //       <p className="self-center text-xs pl-2 underline underline-offset-1 font-poppins">Denny Abbas Zain</p>
  //     </button>
  //   )}
  // </div>
  // <div className="hidden md:block transition-all">
  //   <NavbarDesktop img={attributes.profile.data.attributes.url} />
  // </div>
  // <div className="flex justify-around font-poppins border-text-light-mode border-b md:mt-3 xl:mt-7 dark:border-text-dark-mode">
  //   <Link href="/">
  //     <button type="button" className={`${active === 'post' && activeClass} transition-all duration-500 font-inter lg:text-xl `}>
  //       Posts
  //     </button>
  //   </Link>
  //   <Link href="/project">
  //     <button type="button" className={`${active === 'project' && activeClass} transition-all duration-500 font-inter lg:text-xl`}>
  //       Projects
  //     </button>
  //   </Link>
  //   <Link href="/certificate">
  //     <button type="button" className={`${active === 'certificate' && activeClass} transition-all duration-500 font-inter lg:text-xl`}>
  //       Certificates
  //     </button>
  //   </Link>
  // </div> */}
  );
export default Navbar;
