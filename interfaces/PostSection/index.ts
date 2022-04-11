export interface Post {
  id: string;
  attributes: {
    title: string;
    body: string;
    slug:string;
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
            slug:string;
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
    description:string;
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
  active:'post'|'project'|'certificate'|'about'
}

export interface PostProps {
  data: Post;
}
export interface PostsProps {
  data: Array<Post>;
}
export interface HomeProps extends PostsProps{
  user:User;
}
export interface DetailPostProps {
  data: Post;
  user:User;

}
