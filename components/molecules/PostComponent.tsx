import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import { useRouter } from 'next/router';
import { PostProps } from '../../interfaces/PostSection';
import { IMG } from '../../services/client';

export default function PostComp({ data }: PostProps) {
  const { attributes, id } = data;
  const { push } = useRouter();
  return (
    <div className="h-auto p-3 bg-white pb-3 mb-4 border-b-2 dark:bg-slate-800">
      <Image
        src={`${IMG}${attributes.thumbnail.data.attributes.url}`}
        width={400}
        height={230}
        layout="responsive"
        alt="jumbotron"
        blurDataURL={`${IMG}${attributes.thumbnail.data.attributes.url}`}
        placeholder="blur"
        className=" rounded-lg"
      />
      <div className="px-3">
        <p className="p-2 text-sm font-roboto ">
          {moment(attributes.createdAt).format('dddd, MMMM Do YYYY ')}
        </p>
        <div className="flex font-roboto">
          {attributes.categories.data.map((category) => (
            <button
              type="button"
              onClick={() => push(`/blog/category/${category.id}`)}
              className="underline underline-offset-1 px-2 pb-2 cursor-pointer "
            >
              {category.attributes.name}
            </button>
          ))}
        </div>
        <Link href={`/blog/${id}`}>
          <h1 className="text-4xl font-poppins font-bold tracking-wide cursor-pointer">
            {attributes.title}
          </h1>
        </Link>
      </div>
      <div>
        <p className="font-roboto tracking-tight p-4">
          {attributes.body.substring(0, 200)}
          <Link href={`/blog/${id}`}>
            <p className="py-2 underline underline-offset-1 text-black cursor-pointer">
              Read More...
            </p>
          </Link>
        </p>
      </div>
    </div>
  );
}
