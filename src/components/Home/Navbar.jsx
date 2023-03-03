import Image from 'next/image';
import Link from 'next/link';
import { ethers, BrowserProvider } from 'ethers'
import { useRouter } from 'next/router';
import Logo from '@/../../public/img/Logo.svg';
import LanguagrIcon from '@/../../public/img/lang.svg';
import { navLinks } from '@/data/data';
import Button from '../ui/Button';
import { useState, useEffect } from 'react';
import Network from './Network';
const Navbar = () => {
  const router = useRouter();
  const [lan, setLang] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [account, setAccount] = useState();
  const [results, setResults] = useState([]);
  const [hasQueried, setHasQueried] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [tokenDataObjects, setTokenDataObjects] = useState([]);
  const [walletAddress, setWalletAddress] = useState("");
  const [nameid,setName] = useState();
  
  useEffect(() => {
    checkWallet()
  }, [])
  const checkWallet = () => {
    // setWalletAddress(accounts[0])
  } 
  const connectMetamask = async () => {

    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {

      try {
        /* MetaMask is installed */
        const accounts = await new BrowserProvider({
          method: "eth_requestAccounts",
        });
        
        const network = await ethers.providers.getNetwork();
        if (network.chainId !== 84531 && jsNetwork == 'Base') { // if network Base
          await provider.send('wallet_switchEthereumChain', [{ chainId: '0x84351' }])
        }
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
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
    <header className="bg-skin-lightDark hidden md:block max-w-[1764px] mx-auto">
      <nav className="flex  mx-auto items-center justify-between px-6 ">
        <div className="brand">
          <Image src={Logo} alt="decsolar energy" width={120} height={60} />
        </div>
        <div className="links flex items-center gap-x-7">
          <ul className="flex  gap-x-6 items-center">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  className={` ${
                    router.pathname === link.slug ? 'text-skin-green' : ''
                  } font-poppins hover:text-skin-green transition duration-300 ease-in-out text-slate-50 text-sm`}
                  href={link.slug}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex mx-4 items-center gap-1">
            <Image src={LanguagrIcon} width={25} height={25} alt="english" />
            <select
              onChange={e => setLang(e.target.value)}
              value={lan}
              className="border-0 text-slate-50 focus:outline-none font-poppins text-[18px] bg-transparent"
            >
              <option
                className="text-white  border-0 focus:border-0 bg-skin-lightDark"
                value={'ES'}
              >
                ES
              </option>
              <option
                className="text-white  border-0 focus:border-0 bg-skin-lightDark"
                value={'CS'}
              >
                CS
              </option>
            </select>
          </div>
          <div className="btn-group flex items-center gap-x-2">
            {!walletAddress ? <button onClick={connectMetamask} className='px-2.5 py-2.5 rounded-lg bg-[#0052fe] hover:scale-[1.05] transition' name="Create Account">
              <span>Connect Metamask</span>
            </button> 
            :  
            <button onClick={connectMetamask} className='px-2.5 py-2.5 rounded-lg bg-[#0052fe] hover:scale-[1.05] transition' name="Create Account">
            <span>{walletAddress}</span>
            </button> }

            <Network> </Network>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
