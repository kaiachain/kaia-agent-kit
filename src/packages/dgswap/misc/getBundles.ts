import { queryGql, gqlParams, populatedGqlParams } from "../utils/gql.js";

const getQueryBundles = ({ count, skip, where }: gqlParams): populatedGqlParams => [
  `
  query getBundles($count: Int!, $skip: Int!, $where: Bundle_filter = {}) {
    bundles(first: $count, skip: $skip, orderBy: id, orderDirection: asc, where: $where) {
      ethPriceUSD
      id
    }
  }
  `,
  { count, skip, where }
];

export const getBundles = async (
  count: number,
  skip: number,
  where: object = {}
) => {
  const { bundles = [] } = await queryGql(...getQueryBundles({ count, skip, where }));
  return bundles;
};
