import Image from 'next/image';
import Link from 'next/link';

export default function Post() {
  return (
    <div className="h-auto p-3">
      <Image
        src="/jumbotron.jpg"
        width={400}
        height={200}
        alt="jumbotron"
        className="object-cover rounded-lg"
      />
      <div className="px-3">
        <p className="p-2 text-sm font-roboto ">28 november 2019</p>
        <h1 className="text-4xl font-poppins font-bold tracking-wide">Apa itu .gitignore?</h1>
      </div>
      <div>
        <p className="font-roboto tracking-tight p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium molestias sed possimus
          ab officiis, consequatur temporibus ipsa perspiciatis magni maiores voluptates modi.
          <Link href={'#'}>
            <p className="py-2 underline underline-offset-1 text-black">Read More...</p>
          </Link>
        </p>
      </div>
    </div>
  );
}
