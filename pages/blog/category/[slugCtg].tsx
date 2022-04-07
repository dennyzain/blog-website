import { GetStaticPaths, GetStaticProps } from 'next';
import Card from '../../../components/molecules/Card';
import Layout from '../../../components/templates/Layout';
import { CategoryFetchAll, CategoryProps } from '../../../interfaces/CategorySection';
import { Post } from '../../../interfaces/PostSection';
import { addApolloState, initializeApollo } from '../../../services/client';
import { GET_USERS, GET_CATEGORIES, GET_POST_FROM_CATEGORY } from '../../../services/graphql';

export default function DetailCategory({ data, user }: CategoryProps) {
  const { reviews, name } = data.attributes;
  return (
    <Layout active="post" user={user}>
      <>
        <h2 className="p-3 font-roboto">
          Category :
          {' '}
          {name}
        </h2>
        {reviews.data.map((item:Post) => (
          <Card key={item.id} data={item} model="category" />
        ))}
      </>
    </Layout>
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
  return addApolloState(apolloClient, {
    props: { loading, data: data.findSlug.data, user: user.data.usersPermissionsUser.data },
  });
};
