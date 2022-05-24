import React from "react";

import Link from "next/link";

const Notfound = () => {
  return (
    <div className="not-found">
      <h1> Oooops.... </h1>
      <h2> that page cannot be found</h2>
      <p>
        go back
        <Link href="/">
          <a> home </a>
        </Link>
      </p>
    </div>
  );
};

export default Notfound;
