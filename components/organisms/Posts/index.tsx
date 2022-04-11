import { Post, PostsProps } from '../../../interfaces/PostSection';
import Card from '../../molecules/Card';

export default function Posts({ data }: PostsProps) {
  return (
    <>
      {data.map((item: Post) => (
        <Card key={item.id} data={item} model="post" />
      ))}
    </>
  );
}
