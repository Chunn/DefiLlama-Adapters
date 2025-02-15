const { calculateUsdUniTvl } = require("../helper/getUsdUniTvl");
const { staking } = require("../helper/staking");

module.exports = {
  misrepresentedTokens: true,
  methodology:
    "Factory address (0x794C07912474351b3134E6D6B3B7b3b4A07cbAAa) is used to find the LP pairs. TVL is equal to the liquidity on the AMM.",
  dfk: {
    staking: staking("0x6E7185872BCDf3F7a6cBbE81356e50DAFFB002d2", "0x04b9dA42306B023f3572e106B11D82aAd9D32EBb", "dfk", "defi-kingdoms-crystal", 18),
    tvl: calculateUsdUniTvl(
      "0x794C07912474351b3134E6D6B3B7b3b4A07cbAAa",
      "dfk",
      "0xCCb93dABD71c8Dad03Fc4CE5559dC3D89F67a260",
      [],
      "defi-kingdoms"
    ),
  },
};

