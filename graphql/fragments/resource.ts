import { gql } from 'apollo-boost'

export const RESOURCE_FRAGMENT = gql`
    fragment Resource on ResourceDto {
        id
        createdAt
        updatedAt
    }
`;