import {
  faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function NavbarDesktop({ img }: { img: string }) {
  const { route, back } = useRouter();
  const pathBlog = '/blog/[slug]';
  const pathCategory = '/blog/category/[slugCtg]';
  const handleBack = () => back();
  return (
    <div className="relative">
      <div className="flex flex-col  md:w-24 md:ml-4 lg:w-48 lg:mt-36 h-auto fixed left-7 xl:ml-32 lg:ml-9 top-0 mt-10 ">
        <div className="self-center flex relative lg:h-20 lg:w-20 w-14 h-14">
          <Image
            src={img}
            layout="fill"
            objectFit="initial"
            alt="profile"
            className="rounded-full self-center"
          />
        </div>
        <Link href="/about">
          <p className="font-roboto justify-items-start md:text-xs lg:text-base mt-5 ">
            Hello There, Im
            {' '}
            <Link href="/about">
              <span className="underline underline-offset-1 cursor-pointer">Denny Abbas Zain</span>
            </Link>
            {' '}
            a web developer and programming enthusiast.
          </p>
        </Link>
        <div className="flex flex-col justify-center self-center mt-6">
          <a href="https://facebook.com/denny.az.39/" target="_blank" rel="noreferrer">
            <button type="button">
              <FontAwesomeIcon icon={faFacebookF} size="lg" className="my-2" />
            </button>
          </a>
          <a href="https://twitter.com/abbas_denny" target="_blank" rel="noreferrer">
            <button type="button">
              <FontAwesomeIcon icon={faTwitter} size="lg" className="my-2" />
            </button>
          </a>
          <a href="https://github.com/dennyzain" target="_blank" rel="noreferrer">
            <button type="button">
              <FontAwesomeIcon icon={faGithub} size="lg" className="my-2" />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/denny-abbas-zain-567552194/" target="_blank" rel="noreferrer">
            <button type="button">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" className="my-2" />
            </button>
          </a>
          <a href="https://www.instagram.com/abbas_dznx/" target="_blank" rel="noreferrer">
            <button type="button">
              <FontAwesomeIcon icon={faInstagram} size="lg" className="my-2" />
            </button>
          </a>
        </div>
        {(route === pathBlog || route === pathCategory || route === '/about') && (
        <button onClick={handleBack} type="button" className="font-roboto">
          <FontAwesomeIcon icon={faArrowLeftLong} bounce className="mt-10 pr-1" />
          back
        </button>
        )}
      </div>
    </div>
  );
}
