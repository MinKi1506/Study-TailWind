import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <footer className="flex w-[1300px] max-w-full min-w-[768px] text-[12px] place-content-center border border-white-500 leading-[14.52px] opacity-70 font-inter py-[32px]  ">
        <div className="flex flex-col md:flex-row w-[1200px] max-w-full justify-start md:justify-between">
          <div className="w-[400px] max-w-full">
            <div>
              <div className="mb-2">
                <Image
                  src="/img/symbol.svg"
                  alt="symbol"
                  layout="fixed"
                  width={22}
                  height={22}
                />
                {/* <img src="/img/symbol.svg" alt="symbol" /> */}
              </div>
              <div>
                The world’s first and largest digital marketplace for crypto
                collectibles and non-fungible tokens (NFTs). Buy, sell, and
                discover exclusive digital items.
              </div>
            </div>
            <div className="mt-4">@ 2022 - 2022 Mosaic Square Labs , Inc</div>
          </div>
          <div className="flex flex-col place-self-left">
            <div className="flex mt-3 md:justify-end md:mt-0 py-1.5 pt-1.5 mb-6">
              <Image
                className="mr-[8px]"
                src="/img/twitter.svg"
                alt="twitter"
                layout="fixed"
                width={24}
                height={24}
              />
              <Image
                src="/img/instagram.svg"
                alt="instagram"
                layout="fixed"
                width={24}
                height={24}
              />
              {/* <img src="/img/twitter.svg" alt="twitter" className="mr-[8px]" /> */}
              {/* <img src="/img/instagram.svg" alt="instagram" /> */}
            </div>
            <div className="flex flex-col gap-4 md:flex-row">
              <h5 className="opacity-30">Privacy Policy</h5>
              <h5 className="opacity-30">Terms of Service</h5>
              <h5>Help Center</h5>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
