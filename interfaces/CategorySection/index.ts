import { Post, User } from '../PostSection';

export interface Category {

    data: {
      id: string;
      attributes: {
        name: string;
        reviews: {
          data: Post[];
        };
      };
    };
}

export interface CategoryProps extends User {
  data:{data:Category};
  user:User
}

export interface CategoryFetchAll{
        id: string;
        attributes: {
          name: string;
          slug:string;
        }
}
