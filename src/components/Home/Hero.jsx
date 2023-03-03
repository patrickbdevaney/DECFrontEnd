import Image from 'next/image';
import Link from 'next/link';
import heroImage from '@/../../public/img/hero.svg';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { useState, useEffect  } from 'react'
import { FcGoogle } from 'react-icons/fc';
import metamask from '@/../../public/img/metamask.svg';
import ethers from 'ethers'
import HandleClique from './handleClique'

const Hero = () => {
  const [network, setNetwork] = useState('Base')
  let jsNetwork = 'Base'
  const connectMetamask = async () => {
    console.log('dsfnkdsfdsklfdskj');
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      console.log('dsfnkdsfdsklfdskj');
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const network = await provider.getNetwork()
        if (network.chainId !== 84531 && jsNetwork == 'Base') { // if network Base
          await provider.send('wallet_switchEthereumChain', [{ chainId: '0x84351' }])
        }
        setWalletAddress(accounts[0]);
        setUserAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }

      
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };


  return (
    <div className="bg-skin-dark overflow-y-hidden text-skin-white max-w-[1764px] mx-auto px-10">
      <div className="pt-16 grid  gap-10 lg:grid-cols-2">
        <div>
          <Image src={heroImage} alt="decsolar" width={600} height={600} />
        </div>
        <div className="bg-skin-lightDark text-center border border-[#2F3144] rounded-[15px]">
          <h2 className="font-poppins   text-[2em] leading-[3.125em] font-medium">
            Log Into DEC{' '}
          </h2>
          <form action="" className="px-10 flex flex-col gap-3 opacity-50">
            <Input placeholder="email" name="email" type="email"/>
            <Input placeholder="password" name="password" type="password" />
            <h3 className="text-xs font-poppins">
              {/* <Link href={'forget-password'}>Forget Password </Link> */}
            </h3>

            <Button name="Log In" type="submit" />
          </form>
          <h3 className="text-xs font-poppins py-4">
            <Link href={'forget-password'}>or continue with </Link>
          </h3>
          <div className="flex pb-12 px-10 gap-4 justify-between">
            <button className="btn-secondary w-full ">
              <span className="flex justify-center items-center gap-3 opacity-50 ">
                <FcGoogle size={24} />
                <span>Google</span>
              </span>
            </button>
            
            <button className="btn-secondary w-full hover:scale-110 transition" onClick={connectMetamask}>

              <span className="flex justify-center items-center gap-3">
                <Image src={metamask} alt="metamask" width={35} height={35} />
                <span>Metamask</span>
              </span>
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
