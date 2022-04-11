import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import Animate from '../atoms/Animate';
import { CardProps } from '../../interfaces/CardSection';
import { CategoryFetchAll } from '../../interfaces/CategorySection';

export default function Card({ data, model }: CardProps) {
  const {
    slug, title, categories, thumbnail, body, createdAt, link,
  } = data.attributes;
  const location: string = model === 'post' ? `/blog/${slug}` : model === 'project' ? `/project/${slug}` : `/blog/${slug}`;
  return (
    <Animate>
      <div className="h-auto box-border p-3 pb-3 my-4 mx-2 rounded-lg  dark:bg-dark-mode-secondary transition-colors duration-200 ">
        <div className="relative">
          <Image
            src={`${thumbnail.data.attributes.url}`}
            width={400}
            height={200}
            quality={55}
            layout="responsive"
            alt="thumbnail"
            objectFit="cover"
            blurDataURL={`${thumbnail.data.attributes.url}`}
            placeholder="blur"
            className=" rounded-lg hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="px-4">
          <p className="py-2 text-sm font-roboto ">
            {moment(createdAt).format('dddd, MMMM Do YYYY ')}
          </p>
          <div className="flex font-roboto">
            {model !== 'certificate'
              && categories
              && categories.data.map((category: CategoryFetchAll) => (
                <Link key={category.id} href={`/blog/category/${category.attributes.slug}`}>
                  <button
                    type="button"
                    className="text-base lg:text-sm underline underline-offset-1 px-2 pb-2 cursor-pointer "
                  >
                    {category.attributes.name}
                  </button>
                </Link>
              ))}
          </div>
          {model !== 'certificate' ? (
            <Link href={location}>
              <h1 className="text-2xl lg:text-text-4xl font-poppins font-bold tracking-wide cursor-pointer">
                {title}
              </h1>
            </Link>
          ) : (
            <h1 className="text-2xl lg:text-text-4xl font-poppins font-bold tracking-wide cursor-pointer">
              <a href={link} target="_blank" rel="noreferrer">
                {title}
              </a>
            </h1>
          )}
        </div>
        <div className="font-roboto tracking-tight  px-4 pt-2 block">
          {model !== 'certificate' && <p>{body.substring(0, 180)}</p>}
        </div>
        {model !== 'certificate' && (
          <Link href={location}>
            <button
              type="button"
              className="px-4 font-roboto underline underline-offset-1 cursor-pointer"
            >
              <p className="text-text-light-mode transition-colors duration-200  dark:text-text-dark-mode">
                Read More...
              </p>
            </button>
          </Link>
        )}
      </div>
      <hr className="border-text-light-mode dark:border-text-dark-mode" />
    </Animate>
  );
}
