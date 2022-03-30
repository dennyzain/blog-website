import { Post, PostsProps } from '../../../interfaces/PostSection';
import PostComp from '../../molecules/PostComponent';

export default function Posts({ data }: PostsProps) {
  return (
    <>
      {data.map((item: Post) => (
        <PostComp key={item.id} data={item} />
      ))}
    </>
  );
}
