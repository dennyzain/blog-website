import type { NextPage } from 'next';
import Posts from '../components/organisms/Posts';
import Navbar from '../components/organisms/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Posts />
    </>
  );
};

export default Home;
