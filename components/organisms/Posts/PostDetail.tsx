import Image from 'next/image';
import moment from 'moment';
import { useRouter } from 'next/router';
import { DetailPostProps } from '../../../interfaces/PostSection';
import { Animate } from '../../atoms/Animate';

export default function PostDetail({ data }: DetailPostProps) {
  const { attributes } = data.data;
  console.log(attributes);
  const { push } = useRouter();
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
          sizes=""
          alt="jumbotron"
          className=" rounded-lg"
        />
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
          <h1 className="text-4xl font-poppins font-bold tracking-wide">{attributes.title}</h1>
        </div>
        <div>
          <p className="font-roboto tracking-tight p-4">{attributes.body}</p>
        </div>
      </div>
    </Animate>
  );
}
