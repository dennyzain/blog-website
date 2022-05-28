import Image from 'next/image';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import Animate from '../atoms/Animate';
import { CardDetailProps } from '../../interfaces/CardSection';
import { CategoryFetchAll } from '../../interfaces/CategorySection';

export default function CardDetail({ data }: CardDetailProps) {
  const { attributes } = data;
  return (
    <Animate>
      <div className="h-auto p-3">
        <Image
          src={`${attributes.thumbnail.data.attributes.url}`}
          width={400}
          height={230}
          quality={70}
          blurDataURL={`${attributes.thumbnail.data.attributes.url}`}
          placeholder="blur"
          layout="responsive"
          alt="jumbotron"
          className=" rounded-lg"
        />
        <div className="px-3">
          <p className="p-2 text-sm font-roboto ">
            {moment(attributes.createdAt).format('dddd, MMMM Do YYYY ')}
          </p>
          <div className="flex font-roboto">
            {attributes.categories.data.map((category:CategoryFetchAll) => (
              <Link href={`/blog/category/${category.attributes.slug}`}>
                <button
                  key={category.id}
                  type="button"
                  className="underline underline-offset-1 px-2 pb-2 cursor-pointer "
                >
                  {category.attributes.name}
                </button>
              </Link>
            ))}
          </div>
          <h1 className="text-4xl font-poppins font-bold tracking-wide">{attributes.title}</h1>
        </div>
        <div>
          <ReactMarkdown className="font-roboto tracking-tight p-4">{attributes.body}</ReactMarkdown>
        </div>
      </div>
    </Animate>
  );
}
