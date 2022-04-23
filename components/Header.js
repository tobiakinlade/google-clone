import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {
  const router = useRouter();
  const searchInputRef = useRef();

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <header className='stick top-0 bg-white p-6'>
      <div className='flex w-full items-center'>
        <Image
          src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          height={60}
          width={90}
          className='cursor-pointer'
          onClick={() => router.push('/')}
        />
        <form className='flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full flex-grow shadow-lg max-w-3xl items-center'>
          <input
            className='flex-grow w-full focus:outline-none'
            type='text'
            ref={searchInputRef}
          />
          <XIcon
            className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
            onClick={() => (searchInputRef.current.value = '')}
          />
          <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 rounded-bl-2xl pl-4 border-gray-300 ' />
          <SearchIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 rounded-bl-2xl pl-4 border-gray-300 ' />
          <button onClick={search} className='hidden' type='submit'>
            Search
          </button>
        </form>
        <Avatar
          className='ml-auto'
          url='https://yt3.ggpht.com/yti/APfAmoGe5D8-4k9ZIqFo93E6sKuicV3MoptKiyad4DFqnA=s88-c-k-c0x00ffffff-no-rj-mo'
        />
      </div>

      {/* HeaderOpetions */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
