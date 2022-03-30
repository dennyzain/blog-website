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
    params: { id: post.id },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query({ query: GETPOSTDETAIL, variables: { id: params!.id } });
  const user = await client.query({ query: GETUSERS, variables: { id: 1 } });
  return {
    props: { data: data.review, user: user.data.usersPermissionsUser.data },
  };
};
