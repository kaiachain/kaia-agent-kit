import {queryGql} from "../utils/gql.js";

const GET_POOL_DAY_DATA = `
query PoolDayDatas(
  $count: Int!
  $poolAddress: String!
) {
  poolDayDatas(
    first: $count
    where: { pool: $poolAddress }
  ) {
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
}`

export const getPoolDayData = async (poolAddress: `0x${string}`, count: number) => {
    // Validate input addresses if needed
    const {poolDayDatas = []} = await queryGql(GET_POOL_DAY_DATA, {poolAddress, count});
    return poolDayDatas;
};