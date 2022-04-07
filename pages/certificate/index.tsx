import { GetStaticProps } from 'next';
import Certificates from '../../components/organisms/Certificates';
import Layout from '../../components/templates/Layout';
import { MainCertificatesProps } from '../../interfaces/CertificateSections';
import { addApolloState, initializeApollo } from '../../services/client';
import { GET_USERS, GET_CERTIFICATES } from '../../services/graphql';

export default function Certificate({ data, user }:MainCertificatesProps) {
  return (
    <Layout user={user} active="certificate">
      <Certificates data={data} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  const { data, error, loading } = await apolloClient.query({ query: GET_CERTIFICATES });
  const user = await apolloClient.query({ query: GET_USERS, variables: { id: 1 } });
  if (error || user.error) {
    return {
      props: {
        data: [],
        user: [],
      },
    };
  }
  return addApolloState(apolloClient, {
    props: {
      loading,
      data: data.certificates.data,
      user: user.data.usersPermissionsUser.data,
    },
  });
};
