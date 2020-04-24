import { gql } from 'apollo-boost'

const RESOURCE_FRAGMENT = gql`
    fragment ResourceFragment on ResourceDto {
        id
        createdAt
        updatedAt
    }
`;

export default {
  RESOURCE_FRAGMENT,
}