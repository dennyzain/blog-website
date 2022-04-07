import { Post, User } from '../PostSection';

export interface Category {
      id: string;
      attributes: {
        name: string;
        reviews: {
          data: Array<Post>;
        };
      };
}

export interface CategoryProps extends User {
  data:Category;
  user:User;
}

export interface CategoryFetchAll{
        id: string;
        attributes: {
          name: string;
          slug:string;
        }
}
