import { GetStaticPaths, GetStaticProps } from 'next';
import Footer from '../../components/organisms/Footer';
import Navbar from '../../components/organisms/Navbar';
import PostDetail from '../../components/organisms/Posts/PostDetail';
import { DetailPostProps, Post } from '../../interfaces/PostSection';
import client from '../../services/client';
import { GETPOSTDETAIL, GETPOSTS, GETUSERS } from '../../services/graphql';

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
  const { data } = await client.query({ query: GETPOSTS });
  const paths = data.reviews.data.map((post: Post) => ({
    params: { slug: post.attributes.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data, error, loading } = await client.query({ query: GETPOSTDETAIL, variables: { slug: params!.slug } });
  const user = await client.query({ query: GETUSERS, variables: { id: 2 } });
  if (error || user.error) {
    return {
      props: {
        data: null,
        user: null,
      },
    };
  }
  return {
    props: { data: data.findSlug, user: user.data.usersPermissionsUser.data },
  };
};
