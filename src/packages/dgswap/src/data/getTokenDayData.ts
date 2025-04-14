import { queryGql } from "../../utils/gql.js";

const GET_TOKEN_DAY_DATA = `
query tokenDayDatas(
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

}`;

export const getTokenDayData = async (
  parameters: any
) => {
  const { tokenAddress, count } = parameters;
  // Validate input addresses if needed
  const { tokenDayDatas = [] } = await queryGql(GET_TOKEN_DAY_DATA, {
    tokenAddress,
    count,
  });
  return tokenDayDatas;
};
