import Link from "next/link";

import React from "react";

function Button() {
  return (
    <Link
      href="/categories"
      title="Categories"
      className="px-6 py-3 text-xl text-white duration-500 bg-black border rounded-3xl dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white w-fit allEMT:mx-auto"
    >
      Start reading
    </Link>
  );
}

export default Button;
