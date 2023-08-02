import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import SearchForm from "./SearchForm";

function Search({ search, handleSearch }) {
  return (
    <AnimatePresence>
      {search && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.1 },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.1 },
          }}
          className={`fixed top-0 left-0 w-screen h-screen z-40 bg-gray-800/0 backdrop-blur-lg flex items-center justify-center`}
        >
          <SearchForm handleSearch={handleSearch} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Search;
