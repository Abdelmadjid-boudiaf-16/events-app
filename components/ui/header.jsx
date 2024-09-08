'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {

    const pathname = usePathname()
  return (
    <header className="w-full bg-teal-500 py-5 px-2">
      <div className="container mx-auto xl:w-4/5 flex flex-col md:flex-row items-center md:justify-between gap-4">
        <h1 className='text-4xl text-teal-100 uppercase'>
          <Link href="/">JI Events</Link>
        </h1>
        
          <nav className="flex items-center justify-end gap-5">
              <Link
                href='/events'
                className={` text-center text-sm md:text-xl px-8 py-4 rounded-md hover:bg-teal-50/40 transition-all duration-500 text-teal-50 font-bold uppercase tracking-widest ${
                  '/events' === pathname ? "bg-teal-50/30" : ""
                }`}
              >
                Brows All Events
              </Link>
          </nav>
  
      </div>
    </header>
  );
};

export default Header;
