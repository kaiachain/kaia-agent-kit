import { queryGql } from "../utils/gql";

const getQueryPositions = ({ count, skip, where }: { count: number; skip: number; where?: object }): [string, object] => [
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
