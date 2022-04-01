import { gql } from '@apollo/client';

export const GETPOSTS = gql`
query GetPosts {
  reviews {
    data {
      id
      attributes {
        title
        body
        slug
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
              slug
            }
          }
        }
      }
    }
  }
}
`;

export const GETPOSTDETAIL = gql`
  query GetPostDetail($slug:String!) {
    findSlug(modelName:"review",slug:$slug){
      ...on ReviewEntityResponse{
      data {
        id
        attributes {
          title
          body
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
}
`;

export const GETPOSTFROMCATEGORY = gql`
  query GetCategoriesDetail($slug:String!) {
    findSlug(modelName:"category",slug:$slug){
      ...on CategoryEntityResponse{
      data {
        id
        attributes {
          name
          reviews {
            data {
              id
              attributes {
                title
                body
                slug
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
                      slug
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
}
`;

export const GETCATEGORYALL = gql`
  query GetCategoryAll {
    categories {
      data {
        id
        attributes {
          name
          slug
        }
      }
    }
  }
`;

export const GETUSERS = gql`
  query GetUser($id: ID!) {
    usersPermissionsUser(id: $id) {
      data {
        id
        attributes {
          email
          username
          profile {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GETPROJECT = gql`
  query GetProject {
    projects {
      data {
        id
        attributes {
          title
          body
          slug
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
                slug
              }
            }
          }
        }
      }
    }
  }
`;
export const GET_PROJECT_DETAIL = gql`
  query GetProjectDetail($slug:String!) {
  findSlug(modelName:"project",slug:$slug){
    ...on ProjectEntityResponse{
        data{
          id
          attributes{
            title
            body
            createdAt
            
            thumbnail{
              data{
                attributes{
                  url
                }
              }
            }
            categories{
                 data{
                  attributes{
                    name
                  }
                }
            }
            
          }
        }
    }
  }
}
`;
