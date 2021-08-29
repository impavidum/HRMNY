import gql from "graphql-tag"

const DUPLICATE_GROUPING_MUTATION = gql`
mutation DuplicateGroupingMutation($grouping: createGroupingInput!) {
  createGrouping(data: $grouping) {
    success
  }
}
`

const DELETE_GROUPING_MUTATION = gql`
mutation DeleteGroupingMutation($id: ID!) {
    deleteGrouping(data: $id) {
    success
  }
}
`

const UPDATE_GROUPING_MUTATION = gql`
mutation UpdateGroupingMutation($title: String, $chips: [String], $id: ID) {
    updateGrouping(data: {title: $title, chips: $chips, id: $id}) {
    success
  }
}
`

export {
    DUPLICATE_GROUPING_MUTATION,
    DELETE_GROUPING_MUTATION,
    UPDATE_GROUPING_MUTATION
} 