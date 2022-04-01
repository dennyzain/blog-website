import { GetStaticProps } from 'next';
import toast from 'react-hot-toast';
import useDarkMode from '../../components/hooks/useDarkMode';
import Footer from '../../components/organisms/Footer';
import Navbar from '../../components/organisms/Navbar';
import Projects from '../../components/organisms/Projects';
import { HomeProps } from '../../interfaces/PostSection';
import client from '../../services/client';
import { GETPOSTS, GETPROJECT, GETUSERS } from '../../services/graphql';

export default function Project({ res }: HomeProps) {
  const { user, projects } = res;
  console.log(projects);
  if (projects === null || user === null) toast.error('data sedang error');
  useDarkMode();
  return (
    <div className="md:mx-36 lg:mx-60 xl:mx-96 2xl:mx-auto 2xl:w-2/4  ">
      <Navbar user={user} status="post" />
      <Projects data={projects} />
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data, error, loading } = await client.query({ query: GETPROJECT });
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
    props: {
      res: {
        loading,
        projects: data.projects.data,
        user: user.data.usersPermissionsUser.data,
      },
    },
  };
};
