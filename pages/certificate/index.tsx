import { GetStaticProps } from 'next';
import Certificates from '../../components/organisms/Certificates';
import Footer from '../../components/organisms/Footer';
import Navbar from '../../components/organisms/Navbar';
import { addApolloState, initializeApollo } from '../../services/client';
import { GET_USERS, GET_CERTIFICATES } from '../../services/graphql';

export default function Certificate({ res }) {
  const { loading, certificates, user } = res;
  return (
    <div className="md:mx-36 lg:mx-60 xl:mx-96 2xl:mx-auto 2xl:w-2/4  ">
      <Navbar user={user} status="post" />
      <Certificates data={certificates} />
      <Footer />
    </div>
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
      res: {
        loading,
        certificates: data.certificates.data,
        user: user.data.usersPermissionsUser.data,
      },
    },
  });
};
