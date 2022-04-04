import { GetStaticPaths, GetStaticProps } from 'next';
import Card from '../../../components/molecules/Card';
import Footer from '../../../components/organisms/Footer';
import Navbar from '../../../components/organisms/Navbar';
import { CategoryFetchAll, CategoryProps } from '../../../interfaces/CategorySection';
import client, { initializeApollo } from '../../../services/client';
import { GET_USERS, GET_CATEGORIES, GET_POST_FROM_CATEGORY } from '../../../services/graphql';

export default function DetailCategory({ data, user }: CategoryProps) {
  const { reviews, name } = data.data.attributes;
  return (
    <div className="md:mx-36 lg:mx-60 xl:mx-96 2xl:mx-auto 2xl:w-2/4 ">
      <Navbar user={user} status="post" />
      <h2 className="p-3 font-roboto">
        Category :
        {' '}
        {name}
      </h2>
      {reviews.data.map((item) => (
        <Card key={item.id} data={item} model="category" />
      ))}
      <Footer />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({ query: GET_CATEGORIES });
  const paths = data.categories.data.map((category:CategoryFetchAll) => ({
    params: { slugCtg: category.attributes.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();
  const { data, error, loading } = await apolloClient.query({
    query: GET_POST_FROM_CATEGORY,
    variables: { slug: params!.slugCtg },
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
  return {
    props: { loading, data: data.findSlug, user: user.data.usersPermissionsUser.data },
  };
};
