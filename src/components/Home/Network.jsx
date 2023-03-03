import { useState, useEffect} from 'react'
import { ethers, BrowserProvider } from 'ethers'



export default function Network() {
    const [expanded, setExpanded] = useState(false)
    const [network, setNetwork] = useState('Base')

    const [userAddress, setUserAddress] = useState('');
    const [account, setAccount] = useState();
    const [results, setResults] = useState([]);
    const [hasQueried, setHasQueried] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [tokenDataObjects, setTokenDataObjects] = useState([]);
    const [walletAddress, setWalletAddress] = useState("");
    const [nameid,setName] = useState();

    async function changeNetwork(network) {
        if (network == 'Base') {
            let chainId = 84531;
            setNetwork(network)

            if (typeof window != "undefined" && typeof window.ethereum != "undefined") {

                try {
                  /* MetaMask is installed */
                  const provider = new BrowserProvider(window.ethereum, "any")

                  const walletNetwork = await provider.getNetwork()
                  if (walletNetwork.chainId !== 84531 && network == 'Base') { // if network Base
                    try {
                        provider.send('wallet_switchEthereumChain', [
                          { chainId: `0x${chainId.toString(16)}` }
                        ]);
                      } catch (error) {
                        if (error.code === 4902)
                          try {
                            provider.send('wallet_addEthereumChain', [
                              {
                                chainId: `0x${chainId.toString(16)}`,
                                chainName: "Base Goerli",
                                nativeCurrency: "ETH",
                                rpcUrls: ['https://goerli.base.org'],
                                blockExplorerUrls: ['https://goerli.basescan.org']
                              }
                            ]);
                          } catch (error) {
                            console.log('Error Setting Network', error);
                          }
                      }
                  }
                //   setWalletAddress(accounts[0]);
                //   setUserAddress(accounts[0]);
                //   console.log(accounts[0]);
                } catch (err) {
                  console.error(err.message);
                }
          
                
              } else {
                /* MetaMask is not installed */
                console.log("Please install MetaMask");
              }
        } if (network == 'Polygon') {
            setNetwork(network)

            if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
                let chainId = 80001
                try {
                  /* MetaMask is installed */
                  const provider = new BrowserProvider(window.ethereum, "any")

                  const walletNetwork = await provider.getNetwork()
                  if (walletNetwork.chainId !== 80001 && network == 'Polygon') { // if network Base
                    try {
                        provider.send('wallet_switchEthereumChain', [
                          { chainId: `0x${chainId.toString(16)}` }
                        ]);
                      } catch (error) {
                        if (error.code === 4902)
                          try {
                            provider.send('wallet_addEthereumChain', [
                              {
                                chainId: `0x${chainId.toString(16)}`,
                                chainName: "Polygon Mumbai",
                                nativeCurrency: "MATIC",
                                rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
                                blockExplorerUrls: ['hhttps://polygonscan.com']
                              }
                            ]);
                          } catch (error) {
                            console.log('Error Setting Network', error);
                          }
                      }
                  }
                //   setWalletAddress(provider[0]);
                //   setUserAddress(provider[0]);
                //   console.log(provider[0]);
                } catch (err) {
                  console.error(err.message);
                }
          
                
              } else {
                /* MetaMask is not installed */
                console.log("Please install MetaMask");
              }
        }
    }
    function expandNetworks() {
        setExpanded(!expanded)
    }
    return (

     <>
        <div className='min-w-[150px] relative'>
            <button onClick={()=>expandNetworks()} className=' w-full px-2 py-2 
            border rounded-lg border-[#DDDBE6] flex flex-wrap gap-2 font-bold justify-between items-center hover:scale-[1.1] transition'>
                <div className="flex gap-2 items-center">
                    <img src={network == 'Base' ? './coinbase-logo.svg' : network == 'Polygon' ? './polygon-logo.png' : ''} className='w-5 h-5 mt-0.5'></img>
                    <span>{network}</span>
                </div>
                <img src='./carrot.svg' className='w-3 h-3'></img>
            </button>
            {expanded && (
            <div className='animate-fade-in-up absolute flex w-full flex-column 
            border border-[#dddBe6] rounded-lg flex-wrap bg-[#F5F5F5] dark:bg-[#16161d] mt-2'>
                <div className='flex w-full gap-2 font-bold rounded-lg'>
                    <ul className="w-full">
                        
                        <li className="border-b border-[#dddBe6] w-full ">
                            <button onClick={(e)=>changeNetwork('Base')} className='w-full'>
                                <span className="transition flex gap-2 px-2 py-2 cursor-pointer">
                                    <img src='./coinbase-logo.svg' className='w-5 h-5 mt-0.5'></img>
                                    <span>Base</span>
                                </span>
                            </button>
                        </li>

                        <li onClick={(e)=>changeNetwork('Polygon')} className="border-b border-[#dddBe6] w-full ">
                             <span className="flex gap-2 px-2 py-2 cursor-pointer">
                                <img src='./polygon-logo.png' className='w-5 h-5 mt-0.5'></img>
                                <span>Polygon</span>
                            </span>
                        </li>
                        {/* <li onClick={(e)=>expandNetworks} className="w-full hover:cursor-not-allowed opacity-50">
                             <span className="flex gap-2 px-2 py-2 cursor-pointer">
                                <img src='./bnb-logo.png' className='w-5 h-5 mt-0.5'></img>
                                <span>BNB</span>
                            </span>
                        </li> */}
                    </ul>
                </div>
            </div>)}
        </div>
    </>)
}