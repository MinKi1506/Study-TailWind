import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

//https://tailwindcss.com/docs/guides/nextjs 참고
//https://geonlee.tistory.com/235 참고
//https://velog.io/@zero_mountain/NextNext.js%EC%97%90%EC%84%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0 로컬 이미지 삽입 참고
//https://www.youtube.com/watch?v=5xDVP02g9WQ 폰트 변경 참고
//https://dev.to/manuelalferez/custom-fonts-in-nextjs-tailwindcss-2iip 폰트 변경 참고
//https://kimdabin.tistory.com/entry/Font-format%EA%B3%BC-font-face-%EC%84%A0%EC%96%B8-%EB%B0%8F-%EC%A0%81%EC%9A%A9%EB%B2%95 globals.css에 custom font추가 하는 법 참고
//https://chaeyoung2.tistory.com/66 Next js의  Image컴포넌트 활용법 참고
const Home: NextPage = () => {
  return (
    <div>
      <div className="bg-white w-[1300px] h-[350px]">
        <h2>body</h2>
      </div>
      <footer className="flex w-[1300px] text-[12px] place-content-center border border-white-500 leading-[14.52px] opacity-70 font-inter">
        <div className="flex w-[1200px] justify-between my-[50px]">
          <div className="w-[400px]">
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
          <div className="flex flex-col self-center">
            <div className="flex flex justify-end p-1.5 mb-6">
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
            <div className="flex flex-row">
              <h5 className="mr-4 opacity-30">Privacy Policy</h5>
              <h5 className="mr-4 opacity-30">Terms of Service</h5>
              <h5>Help Center</h5>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
