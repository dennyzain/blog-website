import { gql } from '@apollo/client';

export const GETPOSTS = gql`
  query GetPosts {
    reviews {
      data {
        id
        attributes {
          title
          rating
          body
          thumbnail {
            data {
              attributes {
                url
              }
            }
          }
          createdAt
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const GETPOSTDETAIL = gql`
  query GetPostDetail($id: ID!) {
    review(id: $id) {
      data {
        id
        attributes {
          title
          body
          rating
          thumbnail {
            data {
              id
              attributes {
                url
              }
            }
          }
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const GETPOSTFROMCATEGORY = gql`
  query GetCategoriesDetail($id: ID!) {
    category(id: $id) {
      data {
        id
        attributes {
          name
          reviews {
            data {
              id
              attributes {
                title
                rating
                body
                thumbnail {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                createdAt
                categories {
                  data {
                    id
                    attributes {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GETCATEGORYALL = gql`
  query GetCategoryAll {
    categories {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;
