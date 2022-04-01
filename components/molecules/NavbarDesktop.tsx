import {
  faFacebookF, faGithub, faLinkedinIn, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

export default function NavbarDesktop({ img }: { img: string }) {
  const { pathname, push } = useRouter();
  const pathBlog = '/blog/[id]';
  const pathCategory = '/blog/category/[idCtg]';
  const handleBack = () => push('/');

  return (
    <div className="relative">
      <div className="flex flex-col w-20 h-auto fixed  left-7 lg:left-24 xl:left-64 top-0 mt-10 ">
        <div className="justify-center flex">
          <Image
            src={img}
            layout="fixed"
            width={80}
            height={80}
            alt="profile"
            className="rounded-full "
          />
        </div>
        <p className="font-roboto justify-items-start md:text-xs lg:text-base mt-5">
          Hello There, Im a Web Developer
        </p>
        <div className="flex flex-col mt-6">
          <FontAwesomeIcon icon={faFacebookF} className="my-2" />
          <FontAwesomeIcon icon={faTwitter} className="my-2" />
          <FontAwesomeIcon icon={faGithub} className="my-2" />
          <FontAwesomeIcon icon={faLinkedinIn} className="my-2" />
        </div>
        {pathname === pathBlog || pathname === pathCategory ? (
          <button onClick={handleBack} type="button" className="font-roboto">
            <FontAwesomeIcon icon={faArrowLeftLong} bounce className="mt-10 pr-1" />
            back
          </button>
        ) : null}
      </div>
    </div>
  );
}
