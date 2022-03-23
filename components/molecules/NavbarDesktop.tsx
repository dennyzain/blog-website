import {
  faFacebookF, faGithub, faLinkedinIn, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

export default function NavbarDesktop() {
  const { pathname, push } = useRouter();
  const pathBlog = '/blog/[id]';
  const pathCategory = '/blog/category/[idCtg]';
  const handleBack = () => push('/');
  return (
    <div className="relative ">
      <h1 className="font-poppins font-extrabold text-xl text-center mt-3">DZNX</h1>
      <div className="flex flex-col h-auto w-20 fixed  left-7 lg:left-24 xl:left-32 top-0 mt-10 ">
        <div className="justify-center flex">
          <Image src="/01.jpg" layout="fixed" width={50} height={50} alt="profile" className="rounded-full " />
        </div>
        <div className="flex flex-col mt-6">
          <FontAwesomeIcon icon={faFacebookF} className="my-2" />
          <FontAwesomeIcon icon={faTwitter} className="my-2" />
          <FontAwesomeIcon icon={faGithub} className="my-2" />
          <FontAwesomeIcon icon={faLinkedinIn} className="my-2" />
        </div>
        {(pathname === pathBlog || pathname === pathCategory)
          ? (
            <button onClick={handleBack} type="button" className="font-roboto">
              <FontAwesomeIcon icon={faArrowLeftLong} bounce className="mt-10 pr-1" />
              back
            </button>
          ) : null}
      </div>
    </div>
  );
}
