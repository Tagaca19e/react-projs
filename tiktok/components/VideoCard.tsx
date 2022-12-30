import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { BsPlay, BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';

import { Video } from '../../types';

interface IProps {
  post: Video,
  key: string
}

export default function VideoCard({ post, key}: IProps) {
  return (
    <div className="flex flex-col border-b-2 border-gray-200 pb-6">
      <div>
        <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
          <div className="md:w-16 md:h-16 w-10 h-10">
            <Link href="/">
              <>
                <Image
                  width={62}
                  height={62}
                  className="rounded-full"
                  src={post.postedBy.image}
                  alt={post.postedBy.userName}
                  layout="responsive"
                />
              </>
            </Link>
          </div>
          <div>
            <Link href="/">
              <div>
                <p className="flex items-center md:text-md font-bold text-primary">
                  {post.postedBy.userName}
                  <GoVerified className="text-blue-400 text-md" />
                </p>
                <p className="capitalize font-medium text-xs text-gray-500 hidden md:block">
                  {post.postedBy.userName}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:ml-20 flex gap-4 relative">
        <div className="rounded-3xl">
          <Link href="/">
            <video
              loop
              className="lg:w[600px] h-[300px] md:h-[400px] lg:h-[530px]"
              src={post.video.asset.url}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
