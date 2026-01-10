import React from 'react';

import { MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

const SearchBar = () => {
  return (
    <div className="">
      <div className="relative mx-auto w-full max-w-md ">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full py-2.5 pl-4 pr-10 rounded-full bg-gray-200 shadow-sm focus:outline-none"
        />
        <MagnifyingGlassIcon className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-700" />
      </div>
    </div>
  );
};


export default SearchBar;