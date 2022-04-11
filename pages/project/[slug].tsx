import { GetStaticPaths, GetStaticProps } from 'next';
import CardDetail from '../../components/molecules/CardDetail';
import Layout from '../../components/templates/Layout';
import { Project, ProjectDetailProps } from '../../interfaces/ProjectSection';
import { addApolloState, initializeApollo } from '../../services/client';
import { GET_PROJECTS, GET_USERS, GET_PROJECT_DETAIL } from '../../services/graphql';

export default function DetailProject({ data, user }: ProjectDetailProps) {
  return (
    <Layout user={user} active="project">
      <CardDetail data={data} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({ query: GET_PROJECTS });
  const paths = data.projects.data.map((project:Project) => ({
    params: { slug: `${project.attributes.slug}` },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();
  const { data, error, loading } = await apolloClient.query({
    query: GET_PROJECT_DETAIL,
    variables: { slug: params!.slug },
  });
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
    props: { loading, data: data.findSlug.data, user: user.data.usersPermissionsUser.data },
  });
};
