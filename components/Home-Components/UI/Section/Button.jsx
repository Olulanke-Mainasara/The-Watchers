import React from 'react'
import Link from 'next/link'

function Button() {
  return (
    <Link
      href="/categories"
      title="Categories"
      className="px-6 py-3 text-xl text-white bg-black border rounded-xl dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white duration-500 w-fit allEMT:mx-auto"
    >
      Start reading
    </Link>
  );
}

export default Button