import { GetStaticProps } from 'next';
import Projects from '../../components/organisms/Projects';
import Layout from '../../components/templates/Layout';
import { addApolloState, initializeApollo } from '../../services/client';
import {
  GET_PROJECTS, GET_USERS,
} from '../../services/graphql';
import { MainProjectProps } from '../../interfaces/ProjectSection';

export default function Project({ user, data }: MainProjectProps) {
  return (
    <Layout user={user} active="project">
      <Projects data={data} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  const { data, error, loading } = await apolloClient.query({ query: GET_PROJECTS });
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
      data: data.projects.data,
      user: user.data.usersPermissionsUser.data,
    },
  });
};
