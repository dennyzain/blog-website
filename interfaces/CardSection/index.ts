import { Post } from '../PostSection';

export type Card = Post;

export interface CardProps {
  data: {
    id: string;
    attributes: {
      title: string;
      body: string;
      slug: string;
      thumbnail: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      createdAt: string;
      categories?: {
        data: [
          {
            id: string;
            attributes: {
              name: string;
              slug: string;
            };
          }
        ];
      };
    };
  };
  model: 'project' | 'post' | 'category' | 'certificate';
}

export interface CardDetailProps {
  data: Card;
}
