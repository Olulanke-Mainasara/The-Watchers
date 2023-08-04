import Link from "next/link";

import React from "react";

function Button() {
  return (
    <Link
      href="/categories"
      title="Categories"
      className="px-6 py-3 mx-auto text-lg text-white bg-black border border-black duration-300 dark:border-white md:mx-0 rounded-3xl hover:bg-transparent hover:text-black dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white w-fit"
    >
      Start reading
    </Link>
  );
}

export default Button;
