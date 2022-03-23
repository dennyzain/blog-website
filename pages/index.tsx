import { GetStaticProps } from 'next';
import Posts from '../components/organisms/Posts';
import Navbar from '../components/organisms/Navbar';
import Footer from '../components/organisms/Footer';
import client from '../services/client';
import { GETPOSTS } from '../services/graphql';
import { PostsProps } from '../interfaces/PostSection';

export default function Home({ data }: PostsProps) {
  return (
    <div className="md:mx-36 lg:mx-60 xl:mx-96 2xl:mx-auto 2xl:w-2/4 ">
      <Navbar />
      <Posts data={data} />
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({ query: GETPOSTS });
  const result = data.reviews;
  return {
    props: { data: result },
  };
};
