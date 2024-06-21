import { parseEther, formatEther} from "ethers";

export const constants = {
  smartContractAddress: "0xbC9293dF4750c72D7B2587dEFfB6D9cA92441B28",

  GoogleMapsApiKey: "AIzaSyCB6g7IAeMZIjMtX3BZjgMhCDr3AAfhlhI",
  MapID: "79271e03ebac57b7",
};
type BigNumberish = string | number | bigint;

export const takaToWei = (amountInTaka: number): BigNumberish => {
  // Step 1: Convert Taka to US Dollars
  const amountInUSD = amountInTaka / 117;
  // Step 2: Convert US Dollars to Ether
  const amountInEther = amountInUSD / 28955;
  // Step 3: Convert Ether to Wei
  const amountInWei = parseEther(amountInEther.toFixed(18));
  return amountInWei;
};

takaToWei(2500);

export const weiToTaka = (amountInWei: BigNumberish): number => {
  // Step 1: Convert Wei to Ether
  const amountInEther = parseFloat(
    parseFloat(formatEther(amountInWei)).toFixed(18)
  );

  // Step 2: Convert Ether to US Dollars
  const amountInUSD = parseFloat((amountInEther * 28955).toFixed(2));

  // Step 3: Convert US Dollars to Taka
  const amountInTaka = parseFloat((amountInUSD * 117).toFixed(2));

  return amountInTaka;
};
