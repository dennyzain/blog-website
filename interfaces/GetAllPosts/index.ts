export interface Post {
  id: string;
  attributes: {
    title: string;
    rating: number;
    body: string;
    thumbnail: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    createdAt: string;
    categories: {
      data: [
        {
          id: string;
          attributes: {
            name: string;
          };
        }
      ];
    };
  };
}

export interface PostsProps {
  data: {
    data: Post[];
  };
}
export interface PostProps {
  data: Post;
}
