import { gql } from '@apollo/client';

export const GET_POSTS = gql`
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

export const GET_POST_DETAIL = gql`
  query GetPostDetail($slug: String!) {
    findSlug(modelName: "review", slug: $slug) {
      ... on ReviewEntityResponse {
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
                  slug
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_POST_FROM_CATEGORY = gql`
  query GetCategoriesDetail($slug: String!) {
    findSlug(modelName: "category", slug: $slug) {
      ... on CategoryEntityResponse {
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

export const GET_CATEGORIES = gql`
  query GetCategories {
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

export const GET_USERS = gql`
  query GetUsers($id: ID!) {
    usersPermissionsUser(id: $id) {
      data {
        id
        attributes {
          email
          username
          description
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

export const GET_PROJECTS = gql`
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
  query GetProjectDetail($slug: String!) {
    findSlug(modelName: "project", slug: $slug) {
      ... on ProjectEntityResponse {
        data {
          id
          attributes {
            title
            body
            createdAt

            thumbnail {
              data {
                attributes {
                  url
                }
              }
            }
            categories {
              data {
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
`;

export const GET_CERTIFICATES = gql`
  query GetCertificates {
    certificates {
      data {
        id
        attributes {
          title
          body
          link
          thumbnail {
            data {
              attributes {
                url
              }
            }
          }
          createdAt
        }
      }
    }
  }
`;
