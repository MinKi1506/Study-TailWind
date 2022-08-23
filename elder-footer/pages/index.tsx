import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


//https://tailwindcss.com/docs/guides/nextjs 참고
//https://geonlee.tistory.com/235 참고

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

<h1 className="text-3xl font-bold underline">
     tail wind 배우기!!
    </h1>
    <h1>tail wind 배우기!!</h1>
     
      <footer className={styles.footer}>
        <h3>여기서부터 footer입니다</h3>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
