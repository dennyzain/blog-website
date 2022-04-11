import {
  faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Layout from '../../components/templates/Layout';
import { User } from '../../interfaces/PostSection';
import { addApolloState, initializeApollo } from '../../services/client';
import { GET_USERS } from '../../services/graphql';

export default function About({ data }:{data:User}) {
  return (
    <Layout user={data} active="about">
      <div className="h-auto p-3">
        <div className="relative p-7">
          <Image
            src="/about.jpg"
            blurDataURL="/about.jpg"
            placeholder="blur"
            width={200}
            height={100}
            quality={60}
            layout="responsive"
            objectFit="scale-down"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-row justify-center self-center mt-4 mb-2 md:hidden">
          <a href="https://facebook.com/denny.az.39/" target="_blank" rel="noreferrer">
            <button type="button">
              <FontAwesomeIcon icon={faFacebookF} size="lg" className="mx-2" />
            </button>
          </a>
          <a href="https://twitter.com/abbas_denny" target="_blank" rel="noreferrer">
            <button type="button">
              <FontAwesomeIcon icon={faTwitter} size="lg" className="mx-2" />
            </button>
          </a>
          <a href="https://github.com/dennyzain" target="_blank" rel="noreferrer">
            <button type="button">
              <FontAwesomeIcon icon={faGithub} size="lg" className="mx-2" />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/denny-abbas-zain-567552194/" target="_blank" rel="noreferrer">
            <button type="button">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" className="mx-2" />
            </button>
          </a>
          <a href="https://www.instagram.com/abbas_dznx/" target="_blank" rel="noreferrer">
            <button type="button">
              <FontAwesomeIcon icon={faInstagram} size="lg" className="mx-2" />
            </button>
          </a>
        </div>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.attributes.description}</ReactMarkdown>
      </div>
    </Layout>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  const { error, data, loading } = await apolloClient.query({
    query: GET_USERS,
    variables: { id: 1 },
  });
  if (error) {
    return {
      props: {
        data: null,
      },
    };
  }
  return addApolloState(apolloClient, {
    props: {
      loading,
      data: data.usersPermissionsUser.data,
    },
  });
};
