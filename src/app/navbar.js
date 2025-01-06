'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Tooltip } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isActive = (path) => pathname === path ? 'bg-[#1a1a1a] text-white' : 'text-white';

  return (
    <div className="relative z-10 w-full flex justify-around items-center h-[50px] py-14 px-24">
      <div>
        <img src="/image/logo.png" alt="Logo" />
      </div>

      <div className="flex space-x-8 bg-black px-4 py-2 rounded-xl border-4 border-[#1f1f1f]">
        <Link href="/" className={`py-2 px-4 rounded-md hover:bg-gray-700 transition-all ${isActive("/")}`}>
          Home
        </Link>
        <Link href="/movie" className={`py-2 px-4 rounded-md hover:bg-gray-700 transition-all ${isActive("/movie")}`}>
          Movie & Show
        </Link>
        <Link href="/support" className={`py-2 px-4 rounded-md hover:bg-gray-700 transition-all ${isActive("/support")}`}>
          Support
        </Link>
        <Link href="/subscriptions" className={`py-2 px-4 rounded-md hover:bg-gray-700 transition-all ${isActive("/subscriptions")}`}>
          Subscriptions
        </Link>
      </div>

      <div className="flex space-x-4">
        <Tooltip title="Search">
          <div className="cursor-pointer">
            <SearchOutlinedIcon sx={{ fontSize: 30 }} />
          </div>
        </Tooltip>
        <Tooltip title="Notifications">
          <div className="cursor-pointer">
            <NotificationsNoneOutlinedIcon sx={{ fontSize: 30 }} />
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
