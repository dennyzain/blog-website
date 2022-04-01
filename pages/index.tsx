import { GetStaticProps } from 'next';
import toast from 'react-hot-toast';
import Posts from '../components/organisms/Posts';
import Navbar from '../components/organisms/Navbar';
import Footer from '../components/organisms/Footer';
import client from '../services/client';
import { GETPOSTS, GETUSERS } from '../services/graphql';
import { HomeProps } from '../interfaces/PostSection';
import useDarkMode from '../components/hooks/useDarkMode';

export default function Home({ res }: HomeProps) {
  const { data, user } = res;
  if (data === null || user === null) toast.error('data sedang error');
  useDarkMode();
  return (
    <div className="md:mx-36 lg:mx-60 xl:mx-96 2xl:mx-auto 2xl:w-2/4  ">
      <Navbar user={user} status="post" />
      <Posts data={data} />
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data, error, loading } = await client.query({ query: GETPOSTS });
  const user = await client.query({ query: GETUSERS, variables: { id: 2 } });
  console.log(data);
  if (error || user.error) {
    return {
      props: {
        data: [],
        user: [],
      },
    };
  }
  return {
    props: {
      res: {
        loading,
        data: data.reviews.data,
        user: user.data.usersPermissionsUser.data,
      },
    },
  };
};
