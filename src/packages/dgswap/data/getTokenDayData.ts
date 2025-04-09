import {queryGql} from "../utils/gql";

const GET_POOL_DAY_DATA = `
query PoolDayDatas(
  $count: Int!
  $tokenAddress: String!
) {
  tokenDayDatas(
    first: $count,
    where:{
    token :$tokenAddress
}
){
    id
    date
    volumeUSD
    volume
    priceUSD
    open
    close
    high
    low
}

}`

export const getTokenDayData = async (tokenAddress: `0x${string}`, count: number) => {
    // Validate input addresses if needed
    const {tokenDayDatas = []} = await queryGql(GET_POOL_DAY_DATA, {tokenAddress, count});
    return tokenDayDatas;
};