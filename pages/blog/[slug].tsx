import { GetStaticPaths, GetStaticProps } from 'next';
import Footer from '../../components/organisms/Footer';
import Navbar from '../../components/organisms/Navbar';
import PostDetail from '../../components/organisms/Posts/PostDetail';
import { DetailPostProps, Post } from '../../interfaces/PostSection';
import client, { addApolloState, initializeApollo } from '../../services/client';
import { GET_POST_DETAIL, GET_POSTS, GET_USERS } from '../../services/graphql';

export default function DetailBlog({ data, user }: DetailPostProps) {
  return (
    <div className="md:mx-36 lg:mx-60 xl:mx-96 2xl:mx-auto 2xl:w-2/4 ">
      <Navbar user={user} status="blog" />
      <PostDetail data={data} />
      <Footer />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({ query: GET_POSTS });
  const paths = data.reviews.data.map((post: Post) => ({
    params: { slug: post.attributes.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();
  const { data, error, loading } = await apolloClient.query({ query: GET_POST_DETAIL, variables: { slug: params!.slug } });
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
    props: { loading, data: data.findSlug, user: user.data.usersPermissionsUser.data },
  });
};
