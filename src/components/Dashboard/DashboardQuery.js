import gql from "graphql-tag";

const GET_GROUPINGS = gql`
query {
  dashboard(where:{
    name: "Default"
  }) {
    id
    name
    groupings {
      chips
      id
      title
      subtitle
      layoutLGs {
          x
          y
          w
          h
          card {
            id
          }
        }
        layoutMDs {
          x
          y
          w
          h
          card {
            id
          }
        }
        layoutSMs {
          x
          y
          w
          h
          card {
            id
          }
        }
        layoutXSs {
          x
          y
          w
          h
          card {
            id
          }
        }
      cards {
        title
        cardType
        id
        layoutLG {
          x
          y
          w
          h
        }
        layoutMD {
          x
          y
          w
          h
        }
        layoutSM {
          x
          y
          w
          h
        }
        layoutXS {
          x
          y
          w
          h
        }
      }
    }
  }
}
`;

export { GET_GROUPINGS as default };