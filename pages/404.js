import React, { useEffect } from "react";

import Link from "next/link";

// use router hook - from next - to redirect user
import { useRouter } from "next/router";

const Notfound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, [router]);

  return (
    <div className="not-found">
      <h1> Oooops.... </h1>
      <h2> that page cannot be found</h2>
      <p>
        <Link href="/">
          <a className="btn">go back home </a>
        </Link>
      </p>
    </div>
  );
};

export default Notfound;
