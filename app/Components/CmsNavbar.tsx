import React from "react";
import Link from "next/link";
import { BackArrowIcon } from "./Icons";

const CmsNavbar = () => {
  return (
    <div className="flex justify-between items-center py-1 px-5">
      <Link href="/">
        <BackArrowIcon />
      </Link>
      <div className="font-geistMono text-3xl dark:text-amber-50">
        <span className="text-purple-500 ">The Coolest</span> Blog
      </div>
    </div>
  );
};

export default CmsNavbar;
