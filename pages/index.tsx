import { GetStaticProps } from 'next';
import toast from 'react-hot-toast';
import Posts from '../components/organisms/Posts';
import { initializeApollo } from '../services/client';
import { GET_POSTS, GET_USERS } from '../services/graphql';
import { HomeProps } from '../interfaces/PostSection';
import Layout from '../components/templates/Layout';

export default function Home({ res }: HomeProps) {
  const { data, user } = res;
  if (data === null || user === null) toast.error('data sedang error');
  return (
    <Layout status="post" user={user}>
      <Posts data={data} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  const { data, error, loading } = await apolloClient.query({ query: GET_POSTS });
  const user = await apolloClient.query({ query: GET_USERS, variables: { id: 1 } });
  if (error || user.error) {
    return {
      props: {
        data: null,
        user: null,
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
