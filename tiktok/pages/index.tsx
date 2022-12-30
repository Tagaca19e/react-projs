import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import { Video } from '../../types';

import VideoCard from '../components/VideoCard';
import NoResults from '../components/NoResults';

const inter = Inter({ subsets: ['latin'] })

interface IProps {
  videos: Video[]
}

export async function getServerSideProps() {
  const { data } = await axios.get(`http://localhost:3000/api/post`);

  console.log('DATA EJT:', data);

  return {
    props: {
      videos: data
    }
  }
}

export default function Home({ videos }: IProps) {
  console.log(videos);
  return (
    <h1 className="text-3xl font-bold underline">
      {videos.length ? (
        videos.map((video: Video) => (
          <VideoCard post={video} key={video._id} />
        ))
      ) : (
          <NoResults text={'No Videos'}/>
      )}
    </h1>
  )
}
