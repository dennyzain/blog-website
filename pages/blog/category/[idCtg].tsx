import { GetStaticPaths, GetStaticProps } from 'next';
import PostComp from '../../../components/molecules/PostComponent';
import Footer from '../../../components/organisms/Footer';
import Navbar from '../../../components/organisms/Navbar';
import { CategoryFetchAll, CategoryProps } from '../../../interfaces/CategorySection';
import client from '../../../services/client';
import { GETCATEGORYALL, GETPOSTFROMCATEGORY, GETUSERS } from '../../../services/graphql';

export default function DetailCategory({ data, user }: CategoryProps) {
  const { reviews } = data.category.data.attributes;
  return (
    <div className="md:mx-36 lg:mx-60 xl:mx-96 2xl:mx-auto 2xl:w-2/4 ">
      <Navbar user={user} status="post" />
      <h2 className="p-3 font-roboto">
        Category :
        {' '}
        {data.category.data.attributes.name}
      </h2>
      {reviews.data.map((item) => (
        <PostComp key={item.id} data={item} />
      ))}
      <Footer />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({ query: GETCATEGORYALL });
  const paths = data.categories.data.map((category:CategoryFetchAll) => ({
    params: { idCtg: category.id },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: GETPOSTFROMCATEGORY,
    variables: { id: params!.idCtg },
  });
  const user = await client.query({ query: GETUSERS, variables: { id: 1 } });

  return {
    props: { data, user: user.data.usersPermissionsUser.data },
  };
};
