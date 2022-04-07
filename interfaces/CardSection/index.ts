import { Certificate } from '../CertificateSections';
import { Post } from '../PostSection';

export type Card=Post;
export interface CardProps{
    data:Card | Certificate
    model:'project'| 'post'|'category'|'certificate';
}

export interface CardDetailProps{
    data:Card
}
