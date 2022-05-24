import React from "react";

//import Link from next
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Logo</div>
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
