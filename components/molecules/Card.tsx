import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import { useRouter } from 'next/router';
import { Animate } from '../atoms/Animate';
import { CardProps } from '../../interfaces/CardSection';

export default function Card({ data, model }: CardProps) {
  const { attributes } = data;
  const { slug } = attributes;
  const location = model === 'post' ? `/blog/${slug}` : model === 'project' ? `/project/${slug}` : `category/${slug}`;
  const { push } = useRouter();
  console.log(attributes.categories);
  return (
    <Animate>
      <div className="h-auto p-3 pb-3 mb-4 mt-2 border-b-2  rounded-lg dark:bg-dark-mode-secondary transition-colors duration-200 ">
        <div className="block lg:h-2/4 lg:w-auto xl:h-2/4 w-auto center ">
          <Image
            src={`${attributes.thumbnail.data.attributes.url}`}
            width={400}
            height={230}
            quality={55}
            layout="responsive"
            sizes="50vw"
            alt="thumbnail"
            blurDataURL={`${attributes.thumbnail.data.attributes.url}`}
            placeholder="blur"
            className=" rounded-lg"
          />
        </div>
        <div className="px-3">
          <p className="p-2 text-sm font-roboto ">
            {moment(attributes.createdAt).format('dddd, MMMM Do YYYY ')}
          </p>
          <div className="flex font-roboto">
            {attributes.categories.data.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => push(`/blog/category/${category.attributes.slug}`)}
                className="underline underline-offset-1 px-2 pb-2 cursor-pointer "
              >
                {category.attributes.name}
              </button>
            ))}
          </div>
          <Link href={location}>
            <h1 className="text-4xl font-poppins font-bold tracking-wide cursor-pointer">
              {attributes.title}
            </h1>
          </Link>
        </div>
        <div className="font-roboto tracking-tight px-4 pt-4 block">
          <p>{attributes.body.substring(0, 200)}</p>
        </div>
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
      </div>
    </Animate>
  );
}
