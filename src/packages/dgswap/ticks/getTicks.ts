import { queryGql, queryGqlInput, queryGqlVariable } from "../utils/gql";



const getQueryTicks = ({
    count,
    skip,
    where,
}: queryGqlInput): queryGqlVariable => [
        `
  query MyQuery($count: Int!, $skip: Int!, $where: Tick_filter = {}) {
    ticks(
      first: $count
      orderBy: id
      orderDirection: asc
      skip: $skip
      where: $where
    ) {
      collectedFeesToken0
      collectedFeesToken1
      collectedFeesUSD
      createdAtBlockNumber
      createdAtTimestamp
      feeGrowthOutside0X128
      feeGrowthOutside1X128
      feesUSD
      id
      liquidityGross
      liquidityNet
      liquidityProviderCount
      poolAddress
      price0
      price1
      tickIdx
      untrackedVolumeUSD
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

export const getTicks = async (
    count: number,
    skip: number,
    where: object = {}
) => {
    const { ticks = [] } = await queryGql(...getQueryTicks({ count, skip, where }));
    return ticks;
};
