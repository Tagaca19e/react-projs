import React from 'react';
import { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/Link';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import GoogleLogin from 'react-google-login';
import SuggestedAccounts from './SuggestedAccounts';
import Discover from './Discover';
import Footer from './Footer';

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(true);

  const normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#f51197] rounded';
  const userProfile = false;
  return (
  
    <div>
      <div
        className="block xl:hidden m-2 ml-4 mt-3"
        onClick={() => {
          setShowSidebar((prev) => !prev);
        }}
      >
        {showSidebar ? (
          <ImCancelCircle />
        ) : (
          <AiOutlineMenu />
        )}
      </div>
      {showSidebar && (
        <div className="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3">
          <div className="xl:border-b-2 border-gray-200 xl:pb-4">
            <Link href="/">
              <div className={normalLink}>
                <p className="text-2xl">
                  <AiFillHome />
                </p>
                <span className="text-xl hidden xl:block">
                  For you
                </span>
              </div>
            </Link>
          </div>

          {/* Check if user is logged in */}
          {!userProfile && (
            <div className="px-2 py-4 hidden xl:block">
              <p className="text-gray-400">Log in to like and comment</p>
              <div className="pr-4">
                <GoogleLogin
                  clientId=""
                  render={(renderProps) => (
                    <button
                      className="cursor-pointer bg-white text-lg text-[#f51197] border-[1px] border-[#f51197] font-semibold px-6 py-3 rounded-md outline-none w-full mt-3 hover:text-white hover:bg-[#f51197]"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Login
                    </button>
                  )}
                  onSuccess={() => {}}
                  onFailure={() => { }}
                  cookiePolicy='single_host_origin'
                />
              </div>
            </div>
          )}

          <Discover />
          <SuggestedAccounts />
          <Footer />
        </div>
      )}
    </div>
  )
}
