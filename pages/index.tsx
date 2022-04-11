import { GetStaticProps } from 'next';
import Posts from '../components/organisms/Posts';
import { addApolloState, initializeApollo } from '../services/client';
import { GET_POSTS, GET_USERS } from '../services/graphql';
import { HomeProps } from '../interfaces/PostSection';
import Layout from '../components/templates/Layout';

export default function Home({ data, user }: HomeProps) {
  return (
    <Layout user={user} active="post">
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
  return addApolloState(apolloClient, {
    props: {
      loading,
      data: data.reviews.data,
      user: user.data.usersPermissionsUser.data,
    },
  });
};
