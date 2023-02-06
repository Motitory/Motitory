import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

interface Props {}

const HeaderComponent = ({}: Props) => {
  const { data, status } = useSession();
  return (
    <header className="">
      <div className=" mx-auto flex h-32 w-full  items-center space-x-12 bg-[#f5f9fd] px-2 sm:px-6">
        <div className="flex h-full w-1/6 justify-evenly bg-green-500">
          <Link href="/" className="flex h-full items-center">
            Maco 로고
          </Link>
        </div>
        {/* 사이 간격 줄 방법 생각하기 */}
        <div className="ml-96 flex h-full items-center space-x-12">
          <Link
            href="/"
            className=" flex h-full w-52 items-center justify-evenly text-4xl hover:bg-gray-100  hover:underline hover:underline-offset-4"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className=" flex h-full w-52 items-center justify-evenly text-4xl hover:bg-gray-100 hover:underline hover:underline-offset-4"
          >
            Dashboard
          </Link>
          <Link
            href="/control"
            className="flex h-full w-52 items-center justify-evenly text-4xl hover:bg-gray-100 hover:underline hover:underline-offset-4"
          >
            Control
          </Link>
          <Link
            href="/faq"
            className="flex h-full w-52 items-center justify-evenly text-4xl hover:bg-gray-100 hover:underline hover:underline-offset-4"
          >
            FAQ
          </Link>
          {status === 'unauthenticated' ? (
            <Link
              href="/login"
              className="flex h-full w-52 items-center justify-evenly  text-4xl hover:bg-gray-100 hover:underline hover:underline-offset-4"
            >
              <svg
                width={55}
                height={55}
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[54.37px] w-[54.46px]"
                preserveAspectRatio="none"
              >
                <path
                  d="M27.2277 32.6215C34.7345 32.6215 40.82 25.319 40.82 16.3107C40.82 7.30255 34.7345 -4.57764e-05 27.2277 -4.57764e-05C19.7209 -4.57764e-05 13.6354 7.30255 13.6354 16.3107C13.6354 25.319 19.7209 32.6215 27.2277 32.6215Z"
                  fill="black"
                />
                <path
                  d="M53.8687 46.4857C51.4221 41.5925 46.8007 37.5148 40.8201 35.0682C39.189 34.5245 37.286 34.5245 35.9268 35.34C33.2083 36.9711 30.4899 37.7866 27.2277 37.7866C23.9656 37.7866 21.2471 36.9711 18.5286 35.34C17.1694 34.7963 15.2665 34.5245 13.6354 35.34C7.65477 37.7866 3.03338 41.8644 0.586759 46.7576C-1.31617 50.2916 1.67414 54.3693 5.75184 54.3693H48.7036C52.7813 54.3693 55.7716 50.2916 53.8687 46.4857Z"
                  fill="black"
                />
              </svg>
            </Link>
          ) : (
            <Link
              href="/logout"
              className="flex h-full w-52 items-center justify-evenly  text-4xl hover:bg-gray-100 hover:underline hover:underline-offset-4"
            >
              {data?.user?.name}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
