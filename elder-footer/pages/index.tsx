import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";

//https://tailwindcss.com/docs/guides/nextjs 참고
//https://www.kindacode.com/article/how-to-use-tailwind-css-in-next-js/ tailwind+next js 적용법 참고
//https://geonlee.tistory.com/235 참고
//https://velog.io/@zero_mountain/NextNext.js%EC%97%90%EC%84%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0 로컬 이미지 삽입 참고
//https://www.youtube.com/watch?v=5xDVP02g9WQ 폰트 변경 참고
//https://dev.to/manuelalferez/custom-fonts-in-nextjs-tailwindcss-2iip 폰트 변경 참고
//https://kimdabin.tistory.com/entry/Font-format%EA%B3%BC-font-face-%EC%84%A0%EC%96%B8-%EB%B0%8F-%EC%A0%81%EC%9A%A9%EB%B2%95 globals.css에 custom font추가 하는 법 참고
//https://chaeyoung2.tistory.com/66 Next js의  Image컴포넌트 활용법 참고

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <div className="place-self-center  bg-sky-300 w-[1300px] max-w-full h-[100px] max-h-full text-center">
        <span className="text-black">Head</span>
      </div>
      <div className="place-self-center bg-white w-[1300px] place-self-center max-w-full h-[350px] max-h-full text-center ">
        <span className="text-black inline-block align-middle">body</span>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
