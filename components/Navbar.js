import React from "react";

//import Link from next
import Link from "next/link";

//import

import Image from "next/dist/client/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" alt="logo" width={60} height={60} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/foxes">
        <a>Foxes</a>
      </Link>
    </nav>
  );
};

export default Navbar;
