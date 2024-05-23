import { parseEther,parseUnits } from 'ethers';

export const constants = {
  smartContractAddress: "0xd9145CCE52D386f254917e481eB44e9943F39138",

  GoogleMapsApiKey: "AIzaSyBimhz7M2U-34fZKvZG_ZVs42LED1LeF7o",
  MapID:"ecc87c12b2d4e99f",
};

export const takaToWei = (amountInTaka: number): bigint => {
  // Step 1: Convert Taka to US Dollars
  const amountInUSD = BigInt(amountInTaka) * BigInt(117);

  // Step 2: Convert US Dollars to Ether
  const amountInEther = amountInUSD / BigInt(28955);

  // Step 3: Convert Ether to Wei
  const amountInWei = parseEther(amountInEther.toString());

  return amountInWei;
};



export const weiToTaka = (amountInWei: bigint): number => {
  // Step 1: Convert Wei to Ether
  const amountInEther = Number(amountInWei) / 1e18;

  // Step 2: Convert Ether to US Dollars
  const amountInUSD = amountInEther * 2895.5;

  // Step 3: Convert US Dollars to Taka
  const amountInTaka = amountInUSD * 117;

  return amountInTaka;
};
