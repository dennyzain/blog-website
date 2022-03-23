import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import { PostProps } from '../../interfaces/GetAllPosts';

const IMG = process.env.NEXT_PUBLIC_IMG;
export default function Post({ data }: PostProps) {
  const { attributes } = data;
  return (
    <div className="h-auto p-3 bg-white dark:bg-slate-800">
      <Image
        src={`${IMG}${attributes.thumbnail.data.attributes.url}`}
        width={400}
        height={200}
        alt="jumbotron"
        className="object-cover rounded-lg"
      />
      <div className="px-3">
        <p className="p-2 text-sm font-roboto ">
          {moment(attributes.createdAt).format('dddd, MMMM Do YYYY ')}
        </p>
        <h1 className="text-4xl font-poppins font-bold tracking-wide">{attributes.title}</h1>
      </div>
      <div>
        <p className="font-roboto tracking-tight p-4">
          {attributes.body.substring(0, 200)}
          <Link href="#">
            <p className="py-2 underline underline-offset-1 text-black">Read More...</p>
          </Link>
        </p>
      </div>
    </div>
  );
}
