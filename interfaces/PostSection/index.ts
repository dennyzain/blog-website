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

export interface User {
  id: string;
  attributes: {
    username: string;
    email: string;
    profile: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

export interface NavbarProps {
  user: User;
  status: string;
}
export interface HomeProps {
  res: {
    data: Post[];
    user: User;
  };
}

export interface PostsProps {
  data: Post[];
}
export interface PostProps {
  data: Post;
}
export interface DetailPostProps {
  data: { data: Post };
}
