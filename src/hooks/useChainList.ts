// import { useEffect } from "react";
// import { uniqBy } from "lodash";
import { IChain as Chain } from "../models/chain";
import React from "react";
import { useTranslation } from "react-i18next";

declare var process: {
  env: {
    REACT_APP_MOONBASEAPI: string;
    REACT_APP_MOONRIVERAPI: string;
    REACT_APP_MOONBEAMAPI: string;
  };
};

export default function () {
  const { t } = useTranslation();
  const [chains, setChains] = React.useState<Chain[]>([
    {
      name: "Moonbeam",
      network: t("mainnet"),
      rpc: [
        "https://moonbeam-api.bwarelabs.com/" +
          process.env.REACT_APP_MOONBEAMAPI,
      ],
    },
    {
      name: "Moonriver",
      network: t("mainnet"),
      rpc: [
        "https://moonriver-api.bwarelabs.com/" +
          process.env.REACT_APP_MOONRIVERAPI,
      ],
    },
    {
      name: "MoonbaseAlpha",
      displayName: "Moonbase Alpha",
      network: t("testnet"),
      rpc: [
        "https://moonbase-alpha-api.bwarelabs.com/" +
          process.env.REACT_APP_MOONBASEAPI,
      ],
    },
    {
      name: "MoonbeamDevNode",
      displayName: "Moonbeam Dev Node",
      network: t("testnet"),
      rpc: ["http://localhost:9933"],
    },
  ]);

  // uncomment once we add 'chain list provider' concept. This list blows.

  // useEffect(() => {
  //   if (chains === undefined) {
  //     fetch("https://chainid.network/chains.json")
  //       .then((r) => r.json())
  //       .then((chainIdNetwork) => {
  //         const filteredChains = chainIdNetwork.filter((c: Chain) => {
  //           if (c.rpc.length === 0) {
  //             return false;
  //           }
  //           return true;
  //         });
  //         if (chains) {
  //           setChains(mergeChainSets(chains, filteredChains));
  //         } else {
  //           setChains(filteredChains);
  //         };
  //       });
  //   }
  // }, [chains]);

  return [chains, setChains];
}
