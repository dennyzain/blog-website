import { PostsProps } from '../../../interfaces/GetAllPosts';
import Category from '../../molecules/Category';
import Post from '../../molecules/Post';

export default function Posts({ data }: PostsProps) {
  return (
    <>
      <Category />
      {data.data.map((item) => (
        <Post data={item} />
      ))}
    </>
  );
}
