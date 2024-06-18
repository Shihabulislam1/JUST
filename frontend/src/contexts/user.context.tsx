import React, { createContext, useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import abi from "../constants/abi.json";
import { constants } from "@/constants/constants";

// 1. Create a new context
const UserAddressContext = createContext<{
  userAddress: string;
  setUserAddress: React.Dispatch<React.SetStateAction<string>>;
  provider1: any;
  contract1: any;
  location: { lat: number; lng: number };
  setLocation: React.Dispatch<
    React.SetStateAction<{ lat: number; lng: number }>
  >;
  destination: { lat: number; lng: number };
  setDestination: React.Dispatch<
    React.SetStateAction<{ lat: number; lng: number }>
  >;
  distance: number;
  setDistance: React.Dispatch<React.SetStateAction<number>>;
}>({
  userAddress: "",
  setUserAddress: () => {},
  provider1: null,
  contract1: null,
  location: { lat: 22.356184, lng: 91.819006 },
  setLocation: () => {},
  destination: { lat: 0, lng: 0 },
  setDestination: () => {},
  distance: 0,
  setDistance: () => {},
});

// 2. Define a provider component
export const UserAddressProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userAddress, setUserAddress] = useState<string>("");
  const [provider1, setProvider] = useState<any>();
  const [contract1, setContract] = useState<any>();
  const [location, setLocation] = useState({
    lat: 22.356184,
    lng: 91.819006,
  });
  const [destination, setDestination] = useState({
    lat: 0,
    lng: 0,
  });
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const web3 = async () => {
      if (provider) {
        (window as any).ethereum.on("accountsChanges", () => {
          (window as any).location.reload();
        });

        const signer = await provider.getSigner();
        const address = await signer.getAddress();

        setUserAddress(address);

        const contractAddress = constants.smartContractAddress;
        const contract = new ethers.Contract(contractAddress, abi.abi, signer);

        console.log(contract);
        console.log(provider);

        setContract(contract);
        setProvider(provider);
      }
    };

    provider && web3();
  }, []);

  return (
    <UserAddressContext.Provider
      value={{
        userAddress,
        setUserAddress,
        provider1,
        contract1,
        location,
        setLocation,
        destination,
        setDestination,
        distance,
        setDistance,
      }}
    >
      {children}
    </UserAddressContext.Provider>
  );
};

export const useUserAddress = () => useContext(UserAddressContext);
