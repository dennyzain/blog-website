import { PostsProps } from '../../../interfaces/PostSection';
import PostComp from '../../molecules/PostComponent';

export default function Posts({ data }: PostsProps) {
  return (
    <>
      {data.data.map((item) => (
        <PostComp key={item.id} data={item} />
      ))}
    </>
  );
}
