import Head from 'next/head';
import Image from 'next/image';
import Avatar from '../components/Avatar';
import { ViewGridIcon } from '@heroicons/react/solid';
import { MicrophoneIcon, SearchIcon } from '@heroicons/react/outline';
import Footer from '../components/Footer';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import Search from './search';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <div className='flex flex-col justify-center h-screen'>
      <Head>
        <title>Google</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* Header */}
      <header className='flex w-full p-5 justify-between text-sm '>
        {/* left */}
        <div className='flex  space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        {/* right header */}
        <div className='flex space-x-4 items-center text-gray-700'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>

          {/* Icon */}
          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer' />

          {/* Avatar */}
          <Avatar url='https://yt3.ggpht.com/yti/APfAmoGe5D8-4k9ZIqFo93E6sKuicV3MoptKiyad4DFqnA=s88-c-k-c0x00ffffff-no-rj-mo' />
        </div>
      </header>

      {/* Body */}
      <form className='flex items-center flex-col mt-44 flex-grow'>
        <Image
          src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          height={100}
          width={300}
        />

        <div className='flex items-center w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border-gray-200 p-x-5 p-y-3 sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-5 mr-3 text-gray-500' />
          <input
            ref={searchInputRef}
            type='text'
            className='focus:outline-none flex-grow'
          />
          <MicrophoneIcon className='h-5 ml-3 text-gray-500' />
        </div>

        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button onClick={search} className='btn'>
            Google Search
          </button>
          <button onClick={search} className='btn'>
            I'm Feeling Lucky
          </button>
        </div>
      </form>
      {/* Footer */}
      <Footer />
    </div>
  );
}
