import Image from 'next/image';
import Link from 'next/link';
import { ethers, BrowserProvider } from 'ethers'
import { useRouter } from 'next/router';
import metamask from '@/../../public/img/metamask.svg';
import Button from '../ui/Button';
import { useState, useEffect } from 'react';
import Network from './Network';


const Wallet = () => {
  const router = useRouter();
  const [lan, setLang] = useState('');
  const [userAddress, setUserAddress] = useState('');

  const [tokenDataObjects, setTokenDataObjects] = useState([]);
  const [walletAddress, setWalletAddress] = useState("");
  const [nameid,setName] = useState();
  
  useEffect(() => {
    checkWallet()
  }, [])


  const checkWallet = async () => {
    const provider = new BrowserProvider(window.ethereum, "any")
    const accounts = await provider.send("eth_accounts", [])
    setWalletAddress(accounts[0])
  } 

  const connectMetamask = async () => {
    const baseChainID = 84531
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {

      try {
        /* MetaMask is installed */
        const provider = new BrowserProvider(window.ethereum, "any")
        const accounts = await provider.send("eth_requestAccounts", [])
        const network = await provider.getNetwork();
        setWalletAddress(accounts[0])
        if (network.chainId !== 84531) { // if network Base
          await provider.send('wallet_switchEthereumChain', [{ chainId: `0x${baseChainID.toString(16)}` }])
        }

      } catch (err) {
        console.error(err.message);
      }

      
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };
  return (

        <div>
            {!walletAddress ? 
                <button onClick={connectMetamask} className='text-white px-2 py-2 w-56  flex items-center gap-3 rounded-lg bg-[#0052fe] hover:scale-[1.05] transition' name="Create Account">
                <Image src={metamask} alt="metamask" width={35} height={35} />
                <span>Connect Metamask</span>
                </button> 
            :  
                <button className='text-white px-2 py-2 w-48 flex items-center gap-3 rounded-lg bg-[#0052fe] hover:scale-[1.05] transition' name="Create Account">
                <Image src={metamask} alt="metamask" width={35} height={35} />
                <span>{walletAddress.substring(0,8)}...{walletAddress.substring(36,40)}</span>
                </button> 
                }
        </div>


  );
};

export default Wallet;
