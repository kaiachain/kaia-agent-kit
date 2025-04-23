import { queryGql, queryGqlInput, queryGqlVariable } from "../utils/gql";

const getQueryPositionSnapshots = ({ count, skip, where }: queryGqlInput): queryGqlVariable => [
    `
  query MyQuery($count: Int!, $skip: Int!, $where: PositionSnapshot_filter = {}) {
    positionSnapshots(first: $count, skip: $skip, orderBy: id, orderDirection: asc, where: $where) {
      blockNumber
      collectedFeesToken0
      collectedFeesToken1
      depositedToken0
      depositedToken1
      feeGrowthInside0LastX128
      feeGrowthInside1LastX128
      id
      liquidity
      owner
      timestamp
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

export const getPositionSnapshots = async (
    count: number,
    skip: number,
    where: object = {}
) => {
    const { positionSnapshots = [] } = await queryGql(...getQueryPositionSnapshots({ count, skip, where }));
    return positionSnapshots;
};
