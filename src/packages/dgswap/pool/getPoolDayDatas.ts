import { queryGql } from "../utils/gql";

const getQueryPoolDayData = ({ count, skip, where }: { count: number; skip: number; where?: object }): [string, object] => [
  `
  query PoolDayDatas($count: Int!, $skip: Int!, $where: PoolDayData_filter = {}) {
    poolDayDatas(first: $count, skip: $skip, where: $where) {
      id
      date
      liquidity
      token0Price
      token1Price
      open
      close
      high
      low
    }
  }
  `,
  { count, skip, where }
];

export const getPoolDayData = async (
  count: number,
  skip: number,
  where: object = {}
) => {
  const { poolDayDatas = [] } = await queryGql(...getQueryPoolDayData({ count, skip, where }));
  return poolDayDatas;
};
