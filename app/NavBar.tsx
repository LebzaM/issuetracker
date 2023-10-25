import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="flex space-x-6 px-5 border-b h-14 mb-5 items-center">
      <Link href="/">Logo</Link>

      <ul className="flex space-x-6">
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/issues">Issues</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
