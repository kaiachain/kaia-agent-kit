import { queryGql, gqlParams, populatedGqlParams } from "../utils/gql.js";



const getQueryTickDayDatas = ({
    count,
    skip,
    where,
}: gqlParams): populatedGqlParams => [
        `
  query MyQuery($count: Int!, $skip: Int!, $where: TickDayData_filter = {}) {
    tickDayDatas(
      first: $count
      orderBy: id
      orderDirection: asc
      skip: $skip
      where: $where
    ) {
      date
      feeGrowthOutside0X128
      feeGrowthOutside1X128
      feesUSD
      id
      liquidityGross
      liquidityNet
      volumeToken0
      volumeToken1
      volumeUSD
      tick {
        id
      }
      pool {
        id
      }
    }
  }
  `,
        { count, skip, where },
    ];

export const getTickDayDatas = async (
    count: number,
    skip: number,
    where: object = {}
) => {
    const { tickDayDatas = [] } = await queryGql(
        ...getQueryTickDayDatas({ count, skip, where })
    );
    return tickDayDatas;
};
