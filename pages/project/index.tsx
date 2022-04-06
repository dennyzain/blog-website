import { GetStaticProps } from 'next';
import toast from 'react-hot-toast';
import Projects from '../../components/organisms/Projects';
import Layout from '../../components/templates/Layout';
import { addApolloState, initializeApollo } from '../../services/client';
import { HomeProps } from '../../interfaces/PostSection';
import {
  GET_PROJECTS, GET_USERS,
} from '../../services/graphql';

export default function Project({ res }: HomeProps) {
  const { user, projects } = res;
  if (projects === null || user === null) toast.error('data sedang error');
  return (
    <Layout user={user} active="project">
      <Projects data={projects} />
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
      res: {
        loading,
        projects: data.projects.data,
        user: user.data.usersPermissionsUser.data,
      },
    },
  });
};
