import { queryGql, gqlParams, populatedGqlParams } from "../utils/gql.js";

const getQueryPoolHourDatas = ({
  count,
  skip,
  where,
}: gqlParams): populatedGqlParams => [
    `
  query MyQuery($count: Int!, $skip: Int!, $where: PoolHourData_filter = {}) {
    poolHourDatas(
      first: $count,
      skip: $skip,
      orderBy: id,
      orderDirection: asc,
      where: $where
    ) {
      close
      feeGrowthGlobal0X128
      feeGrowthGlobal1X128
      feesUSD
      high
      id
      liquidity
      low
      open
      periodStartUnix
      protocolFeesUSD
      sqrtPrice
      tick
      token0Price
      token1Price
      tvlUSD
      txCount
      volumeToken0
      volumeToken1
      volumeUSD
      pool {
        id
      }
    }
  }
  `,
    { count, skip, where },
  ];

export const getPoolHourDatas = async (
  count: number,
  skip: number,
  where: object = {}
) => {
  const { poolHourDatas = [] } = await queryGql(
    ...getQueryPoolHourDatas({ count, skip, where })
  );
  return poolHourDatas;
};
