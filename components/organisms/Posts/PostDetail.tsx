import Image from 'next/image';
import moment from 'moment';
import { DetailPostProps } from '../../../interfaces/PostSection';
import { IMG } from '../../../services/client';

export default function PostDetail({ data }: DetailPostProps) {
  const { attributes } = data.data;
  return (
    <div className="h-auto  p-3">
      <Image
        src={`${IMG}${attributes.thumbnail.data.attributes.url}`}
        width={400}
        height={230}
        blurDataURL={`${IMG}${attributes.thumbnail.data.attributes.url}`}
        placeholder="blur"
        layout="responsive"
        sizes=""
        alt="jumbotron"
        className=" rounded-lg"
      />
      <div className="px-3">
        <p className="p-2 text-sm font-roboto ">
          {moment(attributes.createdAt).format('dddd, MMMM Do YYYY ')}
        </p>
        <h1 className="text-4xl font-poppins font-bold tracking-wide">{attributes.title}</h1>
      </div>
      <div>
        <p className="font-roboto tracking-tight p-4">{attributes.body}</p>
      </div>
    </div>
  );
}
