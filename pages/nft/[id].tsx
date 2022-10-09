import React from 'react';
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';

const NFTDropPage = () => {
  // Auth code(Hooks)
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();

  const metamask = () => {
    address ? disconnect() : connectWithMetamask();
  };

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* left */}
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
        <div className="flex flex-col items-center py-2 lg:min-h-screen justify-center">
          <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl">
            <img
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
              src="https://i.pinimg.com/550x/a3/33/13/a3331355daad20bc0ef6ec14bd0f269f.jpg"
              alt="Image"
            />
          </div>
          <div className="text-center p-5 space-y-2">
            <h1 className="text-4xl font-bold text-white">CWSFAM Apes </h1>
            <h2 className="text-xl text-gray-300">
              A collection of CWSFAM Apes who live & breath React!
            </h2>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/* hearder */}
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{' '}
            <span className="text-black font-extrabold underline decoration-pink-600/50">
              CWSFAM
            </span>{' '}
            NFT Market Place
          </h1>

          <button
            onClick={metamask}
            className="rounded-full bg-rose-400/75 text-white px-4 py-2 text-xs lg:px-5 lg:py-3 lg:text-base lg:space-y-0"
          >
            {address ? 'Sign Up' : 'Sign In'}
          </button>
        </header>

        <hr className="my-2 border" />

        {address ? (
          <p className="text-center text-sm text-red-400/60">
            You're logged in with wallet {address.substring(0, 5)}...
            {address.substring(address.length - 5)}
          </p>
        ) : (
          ''
        )}

        {/* content */}

        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center">
          <img
            className="w-80 object-cover pb-10 lg:h-40"
            src="https://media.newyorker.com/photos/61016c1c7a2a603b3075c7b8/master/w_2560%2Cc_limit/chayka-boredapeclub.jpg"
            alt=""
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            The CWSFAM Apes Coding Club | NFT Drop
          </h1>
          <p className="pt-2 text-xl text-green-500">13 / 21 NFT's claimed</p>
        </div>

        {/* mint button */}

        <button className="bg-rose-500 mt-10 rounded-full h-16 w-full text-white font-bold">
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  );
};

export default NFTDropPage;
