// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { signIn, useSession, signOut } from 'next-auth/react';
// import styles from '../styles/Home.module.css';
const Home: NextPage = () => {
  const { data, status } = useSession();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      ​
      <main>
        <p>status: {status}</p>
        <p>{data?.user?.name}</p>
        <p>{data?.user?.email}</p>
        {data?.user ? (
          <>
            <button type="button" onClick={() => signOut()}>
              kakao Logout
            </button>
          </>
        ) : (
          <button type="button" onClick={() => signIn('kakao')}>
            kakao Login
          </button>
        )}
      </main>
      ​
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};
export default Home;
