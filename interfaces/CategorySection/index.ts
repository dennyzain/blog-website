import { Post } from '../PostSection';

export interface Category {
  category: {
    data: {
      id: string;
      attributes: {
        name: string;
        reviews: {
          data: Post[];
        };
      };
    };
  };
}

export interface CategoryProps {
  data: Category;
}

export interface CategoryFetchAll{
        id: string;
        attributes: {
          name: string;
          slug:string;
        }
}
