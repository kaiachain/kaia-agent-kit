import { queryGql } from "../utils/gql";

const getQueryFactories = ({ count, skip, where }: { count: number, skip: number, where?: object }): [string, object] => [`
  query MyQuery($count:Int!,$skip:Int!,$where: Factory_filter = {}) {
  factories(where: $where, first: $count, orderBy: id, orderDirection: asc, skip: $skip) {
  id
  owner
  poolCount
  totalFeesETH
  totalFeesUSD
  totalProtocolFeesETH
  totalProtocolFeesUSD
  totalValueLockedETH
  totalValueLockedETHUntracked
  totalValueLockedUSD
  totalValueLockedUSDUntracked
  totalVolumeETH
  totalVolumeUSD
  txCount
  untrackedVolumeUSD
}
}`, { count, skip, where }]

export const getFactories = async (
  count: number,
  skip: number,
  where: object = {}
) => {
  const { factories = [] } = await queryGql(...getQueryFactories({ count, skip, where }));
  return factories;
};
