import React from "react";
import SeachIcon from "../../../assest/Search.png";
import Logo from "../../../assest/icon/logo";
import Image from "next/image";
import Link from "next/link";
import ContentContainer from "../../ContentContainer";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 shadow-lg bg-white">
      <ContentContainer className="flex items-center justify-between h-16 relative">
        <Logo />
        <ul className="hidden gap-4 sm:flex">
          <li className="hover:border-b border-orange-500">
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">Travel</Link>
          </li>

          <li>
            <Link href="">Food</Link>
          </li>
          <li>
            <Link href="">Lifestyle</Link>
          </li>
          <li>
            <Link href="">Fashion</Link>
          </li>
          <li>
            <div className="flex gap-2 items-center">
              <Image
                src={SeachIcon}
                alt="search icon"
                className="w-[16px] h-[16px]"
              />
              <input
                type="text"
                className="focus:outline-none border-none "
                placeholder="search here..."
              />
            </div>
          </li>
        </ul>
      </ContentContainer>
    </div>
  );
};

export default Navbar;