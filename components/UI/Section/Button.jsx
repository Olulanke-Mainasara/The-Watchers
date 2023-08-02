import Link from "next/link";

import React from "react";

function Button() {
  return (
    <Link
      href="/categories"
      title="Categories"
      className="px-6 py-3 mx-auto text-lg text-white duration-300 bg-black border md:mx-0 rounded-3xl dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white w-fit"
    >
      Start reading
    </Link>
  );
}

export default Button;
