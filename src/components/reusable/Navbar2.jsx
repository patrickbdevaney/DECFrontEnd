import { IoIosArrowDown } from 'react-icons/io';

import avatar from '@/../../public/img/avatar.svg';
import Image from 'next/image';

import Wallet from './Wallet';
import Network from './Network';


const Navbar = () => {
  return (
    <header className="flex   w-full  bg-white py-1 px-5 justify-between">
      <h2 className="text-4xl">Staking</h2>
      <div className="flex gap-2 items-center">
        <Wallet/>
        <Network/>
      </div>
    </header>
  );
};

export default Navbar;
