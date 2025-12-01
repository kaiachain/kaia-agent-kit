/** @format */

import validations from "../../web3/utils/validations";
import { TickMath } from "@uniswap/v3-sdk";
import { queryGql } from "../utils/gql";

export const getPositionValue = async (parameters: any, config: any) => {
  try {
    let { network } = config;
    let { positionId } = parameters;
    network = network ? network.toLowerCase() : "kairos";

    validations.checkNetwork(network);
    const Q96 = BigInt(2 ** 96);

    const positionQuery = `
      query PositionDetails($positionId: String!) {
        positions(where: {id: $positionId}) {
          id
          liquidity
          tickLower {
            tickIdx
          }
          tickUpper {
            tickIdx
          }
          pool {
            token0 {
              symbol
              decimals
              derivedETH
            }
            token1 {
              symbol
              decimalset
              derivedETH
            }
            tick
          }
        }
        bundle(id: "1") {
          ethPriceUSD
        }
      }
    `;

    const data = await queryGql(positionQuery, { positionId }, network);

    const position = data.data.positions[0];
    const ethPriceUSD = parseFloat(data.data.bundle.ethPriceUSD);

    const liquidity = BigInt(position.liquidity);
    const currentTick = parseInt(position.pool.tick);

    const sqrtRatioCurrent = BigInt(
      TickMath.getSqrtRatioAtTick(currentTick).toString()
    );
    const sqrtRatioLower = BigInt(
      TickMath.getSqrtRatioAtTick(
        parseInt(position.tickLower.tickIdx)
      ).toString()
    );
    const sqrtRatioUpper = BigInt(
      TickMath.getSqrtRatioAtTick(
        parseInt(position.tickUpper.tickIdx)
      ).toString()
    );

    let amount0 = BigInt(0);
    let amount1 = BigInt(0);

    if (sqrtRatioCurrent <= sqrtRatioLower) {
      amount0 =
        (liquidity * (sqrtRatioUpper - sqrtRatioLower) * Q96) /
        (sqrtRatioUpper * sqrtRatioLower);
    } else if (sqrtRatioCurrent < sqrtRatioUpper) {
      amount0 =
        (liquidity * (sqrtRatioUpper - sqrtRatioCurrent) * Q96) /
        (sqrtRatioUpper * sqrtRatioCurrent);
      amount1 = (liquidity * (sqrtRatioCurrent - sqrtRatioLower)) / Q96;
    } else {
      amount1 = (liquidity * (sqrtRatioUpper - sqrtRatioLower)) / Q96;
    }

    const token0Decimals = parseInt(position.pool.token0.decimals);
    const token1Decimals = parseInt(position.pool.token1.decimals);

    const amount0Formatted =
      parseFloat(amount0.toString()) / Math.pow(10, token0Decimals);
    const amount1Formatted =
      parseFloat(amount1.toString()) / Math.pow(10, token1Decimals);

    const token0PriceUSD =
      parseFloat(position.pool.token0.derivedETH) * ethPriceUSD;
    const token1PriceUSD =
      parseFloat(position.pool.token1.derivedETH) * ethPriceUSD;

    const token0ValueUSD = amount0Formatted * token0PriceUSD;
    const token1ValueUSD = amount1Formatted * token1PriceUSD;
    const totalValueUSD = token0ValueUSD + token1ValueUSD;

    return {
      positionId,
      token0: {
        symbol: position.pool.token0.symbol,
        amount: amount0Formatted,
        valueUSD: token0ValueUSD,
      },
      token1: {
        symbol: position.pool.token1.symbol,
        amount: amount1Formatted,
        valueUSD: token1ValueUSD,
      },
      totalValueUSD,
      isInRange:
        currentTick >= parseInt(position.tickLower) &&
        currentTick <= parseInt(position.tickUpper),
    };
  } catch (error: any) {
    throw new Error(`Failed to calculate position value: ${error.message}`);
  }
};
