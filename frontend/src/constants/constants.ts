export const constants = {
  smartContractAddress: "0xfe32c229e09c7822dAdA3a71B2ccd914224aFD70",
};

export const takaToWei = (amountInTaka: number) => {
  // Step 1: Convert Taka to US Dollars
  const amountInUSD = amountInTaka / 117;

  // Step 2: Convert US Dollars to Ether
  const amountInEther = amountInUSD / 2895.5;

  // Step 3: Convert Ether to Wei
  const amountInWei = amountInEther * 1e18;

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

