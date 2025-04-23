import { gqlParams, populatedGqlParams, queryGql } from "../utils/gql.js";

const getQueryPositions = ({ count, skip, where }: gqlParams): populatedGqlParams => [
  `
  query MyQuery($count: Int!, $skip: Int!, $where: Position_filter = {}) {
    positions(first: $count, skip: $skip, orderBy: id, orderDirection: asc, where: $where) {
      collectedFeesToken0
      collectedFeesToken1
      depositedToken0
      depositedToken1
      feeGrowthInside0LastX128
      feeGrowthInside1LastX128
      id
      liquidity
      owner
      withdrawnToken0
      withdrawnToken1
      transaction {
        id
      }
    }
  }
  `,
  { count, skip, where }
];

export const getPositions = async (
  count: number,
  skip: number,
  where: object = {}
) => {
  const { positions = [] } = await queryGql(...getQueryPositions({ count, skip, where }));
  return positions;
};
