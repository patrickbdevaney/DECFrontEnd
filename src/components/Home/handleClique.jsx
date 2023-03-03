import { Alchemy, Network, Utils } from 'alchemy-sdk';
import { ethers, BrowserProvider } from 'ethers';
import { useEffect, useState } from 'react';






function HandleClique() {
  const provider = new ethers.BrowserProvider();
  const [userAddress, setUserAddress] = useState('');
  const [account, setAccount] = useState();
  const [results, setResults] = useState([]);
  const [hasQueried, setHasQueried] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [tokenDataObjects, setTokenDataObjects] = useState([]);
  const [walletAddress, setWalletAddress] = useState("");
  const [nameid,setName] = useState();


  
  // useEffect(() => {
  //   getCurrentWalletConnected();
  //   addWalletListener();
  // }, [walletAddress]);

  // const connectWallet = async () => {
  //   if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
  //     try {
  //       /* MetaMask is installed */
  //       const accounts = await window.ethereum.request({
  //         method: "eth_requestAccounts",
  //       });
        
  //       setWalletAddress(accounts[0]);
  //       setUserAddress(accounts[0]);
  //       console.log(accounts[0]);
  //     } catch (err) {
  //       console.error(err.message);
  //     }
  //   } else {
  //     /* MetaMask is not installed */
  //     console.log("Please install MetaMask");
  //   }
  // };

  // const getCurrentWalletConnected = async () => {
  //   if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
  //     try {
  //       const accounts = await window.ethereum.request({
  //         method: "eth_accounts",
  //       });
  //       if (accounts.length > 0) {
  //         setWalletAddress(accounts[0]);
  //         setUserAddress(accounts[0]);
  //         console.log(accounts[0]);
  //       } else {
  //         console.log("Connect to MetaMask using the Connect button");
  //       }
  //     } catch (err) {
  //       console.error(err.message);
  //     }
  //   } else {
  //     /* MetaMask is not installed */
  //     console.log("Please install MetaMask");
  //   }
  // };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
        setUserAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      /* MetaMask is not installed */
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };

  async function getinfo(x) {
    setUserAddress(x);
    const name=await provider.lookupAddress(userAddress);
    setName[name];
  }};

export default HandleClique;