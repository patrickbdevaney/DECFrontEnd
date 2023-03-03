import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { navLinks } from '@/data/data';

import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/../../public/img/Logo.svg';
import LanguagrIcon from '@/../../public/img/lang.svg';
import { navLinks } from '@/data/data';

import Network from './Network';
import Wallet from './Wallet';



const Navbar = () => {
  const router = useRouter();
  const [lan, setLang] = useState('');


  
  return (
    <header className="bg-skin-lightDark hidden md:block max-w-[1764px] mx-auto">
      <nav className="flex mx-auto items-center justify-between px-6 ">
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
            <Wallet/>

            <Network> </Network>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
