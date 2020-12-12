import Head from "next/head";
import styles from "../styles/Home.module.css";
import Player from "../components/player";
import { useContext } from "react";
import { VideosContext, Video } from "../context/VideosContext";
import Inputs from "../components/inputs";

export default function Home() {
  const { videos } = useContext(VideosContext);

  const videoPlayers = videos.map((video: Video, index: number) => (
    <Player video={video} key={index} id={index} />
  ));
  return (
    <div className={styles.container}>
      <Head>
        <title>Video Player</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Inputs />
      {videoPlayers}
    </div>
  );
}
