import { Post } from '../PostSection';

export type Card=Post;
export interface CardProps{
    data:Card
    model:'project'| 'post'|'category';
}
