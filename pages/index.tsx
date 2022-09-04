import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { Button } from '@mui/material'
import { LoadingButton } from '@mui/lab';

interface SearchCatImage {
  id: string;
  url: string;
  width: number;
  height: number;
};

interface IndexPageProps {
  initialCatImageUrl: string;
}

const fetchCatImage = async (): Promise<SearchCatImage> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const result = await res.json();
  // console.log(result[0]);
  return result[0];
}

const Home: NextPage<IndexPageProps> = ({ initialCatImageUrl }) => {
  const [catImageUrl, setCatImageUrl] = useState(initialCatImageUrl);
  const [ isLoading, setIsLoading ] = useState(false);

  const handleClick =async () => {
    setIsLoading(true);
    const catImage = await fetchCatImage();
    setCatImageUrl(catImage.url);
    setIsLoading(false);
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh"
    }}>
      <h2>猫画像アプリ</h2>
      <img src={catImageUrl} width={400} height="auto"/>
      {isLoading ? (
      <LoadingButton loading loadingIndicator="Loading…" variant="outlined" size="large" style={{margin: 20}} onClick={handleClick}>今日の猫さん</LoadingButton>
      ) :(
        <LoadingButton loadingIndicator="Loading…" variant="outlined" size="large" style={{margin: 20}} onClick={handleClick}>今日の猫さん</LoadingButton>
      )
    }
    </div>
  )
};

//SSR
export const getServerSideProps: GetServerSideProps<IndexPageProps> = async () => {
  const catImage = await fetchCatImage();
  return {
    props: {
      initialCatImageUrl: catImage.url,
    },
  };
};

export default Home;
